import { Navigate, Outlet } from "react-router-dom";
import useUserStore from "../store/useUserState";

const PrivateRoute = () => {
    const { user } = useUserStore();

    if (!user?.userId) {
        return <Navigate to="/auth" />;
    }

    return <Outlet />;
};

export default PrivateRoute;
