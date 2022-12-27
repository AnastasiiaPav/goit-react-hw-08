import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ component: Component, redirectToContacts = '/'  })=> {
    const isLogin = useSelector(state => state.user.isLogged);
    return isLogin ? <Navigate to={redirectToContacts} /> : Component;
}

export default RestrictedRoute;