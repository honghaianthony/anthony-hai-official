import { Route, Navigate, useLocation } from "react-router-dom";
import { useStore } from "../store/UseStore";

function PrivateRoute({ children, ...rest }) {
    const [state, dispatch] = useStore();
    const location = useLocation();
    return (
        <Route {...rest}>
            {state.isAuthenticated ? (
                children
            ) : (
                <Navigate
                    to={{
                        pathname: "/login",
                        state: { from: location },
                    }}
                />
            )}
        </Route>
    );
}

export default PrivateRoute;
