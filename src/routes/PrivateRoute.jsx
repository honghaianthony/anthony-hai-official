import { Route, Redirect, useLocation } from "react-router-dom";
import { UseStore } from "../store";

function PrivateRoute({ children, ...rest }) {
    const [state, dispatch] = UseStore();
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
