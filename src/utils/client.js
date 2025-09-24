//import { queryCache } from "react-query";
import * as auth from "../auth-provider";
import { API } from "../hooks/useBaseURL/useBaseURL";
async function client(
    endpoint,
    { data, token, headers: customHeaders, ...customConfig } = {}
) {
    const config = {
        method: data ? "POST" : "GET",
        body: data ? JSON.stringify(data) : undefined,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
            "Content-Type": data ? "application/json" : undefined,
            Accept: data ? "application/json" : "application/json",
            "Access-Control-Allow-Credentials": true,
            ...customHeaders,
        },
        ...customConfig,
    };

    return window.fetch(`${API}${endpoint}`, config).then(async (response) => {
        if (response.status === 401) {
            // queryCache.clear();
            await auth.logout();
            // refresh the page for them
            window.location.assign(window.location);
            return Promise.reject({ message: "Please re-authenticate." });
        }
        const data = await response.json();
        if (response.ok) {
            if (data.success || data.status === "Success") {
                return data;
            } else {
                return Promise.reject(data);
            }
        } else {
            return Promise.reject(data);
        }
    });
}

export { client };
