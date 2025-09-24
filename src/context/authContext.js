import * as React from "react";
import * as auth from "../auth-provider";
import { client } from "../utils/client";
import { useAsync } from "../hooks/useAsync/useAsync.js";
// import SpinnerFullPage from "../components/SpinnerFullPage";
import LoadableSection from "../components/Spinner/LoadableSection";


async function bootstrapAppData() {
    let userInfo = null;

    const token = await auth.getToken();
    if (token) {
        const data = await client("dashboard-bootstrap", { token });
        // queryCache.setQueryData("list-items", data.listItems, {
        //   staleTime: 5000,
        // });
        // for (const listItem of data.listItems) {
        //   setQueryDataForBook(listItem.book);
        // }
        userInfo = {
            ...data.data.infoDetails,
            token: token,
            familyMembersInfo: data.data.familyMembersInfo,
            devicesAndNotifications: data.data.devicesAndNotifications,
        };
    }
    return userInfo;
}

const AuthContext = React.createContext();
AuthContext.displayName = "AuthContext";

function AuthProvider(props) {
    const userRef = React.useRef();
    const {
        data: user,
        status,
        error,
        isLoading,
        isIdle,
        isError,
        isSuccess,
        run,
        setData,
    } = useAsync({
        status: "pending",
        data: userRef.current || null,
        error: null,
    });

    React.useEffect(() => {
        const appDataPromise = bootstrapAppData();
        run(appDataPromise);
    }, [run]);

    const refresh = React.useCallback(async (callback) => {
        const token = await auth.getToken();

        const appDataPromise = bootstrapAppData();
        run(appDataPromise).then((data) => {
            userRef.current = {
                ...data,
                token,
            };
            if (callback) {
                callback();
            }
        });
    }, []);
    const login = React.useCallback(
        (form) =>
            auth.login(form).then(async (token) => {
                const appDataPromise = bootstrapAppData();
                run(appDataPromise).then((data) => {
                    userRef.current = {
                        ...data,
                        token,
                    };
                });
            }),
        [setData]
    );
    const register = React.useCallback(
        (form) =>
            auth.register(form).then(async (token) => {
                const appDataPromise = bootstrapAppData();
                run(appDataPromise).then((data) => {
                    userRef.current = {
                        ...data,
                        token,
                    };
                    // setData({
                    //   ...data.data,
                    //   token,
                    //   // familyMembersInfo: data.data.familyMembersInfo,
                    //   // devicesAndNotifications: data.data.devicesAndNotifications,
                    // });
                });
            }),
        [setData]
    );
    const logout = React.useCallback(
        async (callback) => {
            const token = await auth.getToken();
            const data = await client("logout", { data: "email", token });
            auth.logout();
            deleteAllCookies();
            // queryCache.clear();
            setData(null);
            if (callback) {
                callback();
            }
        },
        [setData]
    );

    const value = React.useMemo(
        () => ({ user, login, logout, register, refresh }),
        [login, logout, register, user, refresh]
    );

    if (isLoading || isIdle) {
        return <LoadableSection loaderKey="header"></LoadableSection>;
    }

    if (isError) {
        return false;
    }

    if (isSuccess) {
        return <AuthContext.Provider value={value} {...props} />;
    }

    throw new Error(`Unhandled status: ${status}`);
}


function useAuth() {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error(`useAuth must be used within a AuthProvider`);
    }
    return context;
}

function useClient() {
    const { user } = useAuth();
    const token = user?.token;
    return React.useCallback(
        (endpoint, config) => client(endpoint, { ...config, token }),
        [token]
    );
}
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
export { AuthProvider, useAuth, useClient };