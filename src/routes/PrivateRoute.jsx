import { Route, Redirect, useLocation } from "react-router-dom";
import { useStore } from "../store/UseStore";

function PrivateRoute({ children, ...rest }) {
    const [state, dispatch] = useStore();
    const location = useLocation();
    return (
        <Route {...rest}>
            {state.isAuthenticated ? (
                children
            ) : (
                <Redirect
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
