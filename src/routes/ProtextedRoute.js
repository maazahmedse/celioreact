import { useLocation, useNavigate, useParams } from "react-router";

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, redirectPath = "/login", children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const redirectTo = location.pathname + location.search;
    if (!user) {
        if (location.search) {
            return (
                <Navigate
                    to={redirectPath + "?redirect_to=" + redirectTo}
                />
            );
        } else {
            return <Navigate to={"/login"} />;
        }
    }

    return children;
};
export { ProtectedRoute };