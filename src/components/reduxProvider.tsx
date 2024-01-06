import { Provider } from "react-redux";
import store from "../redux/store";

export default function ReduxProvider({children}:{children: JSX.Element}){
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}