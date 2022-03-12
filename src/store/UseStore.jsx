import { useContext } from "react";
import Context from "./Context";

export const UseStore = () => {
    const [state, dispatch] = useContext(Context);
    return [state, dispatch];
};
