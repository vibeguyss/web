import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { COLOR } from "../color/color";

const Layout = () => (
    <div
        style={{
            display: "flex",
            background: COLOR.background,
            maxHeight: "100vh",
        }}
    >
        <Sidebar />
        <main
            style={{
                flex: 1,
                paddingLeft: "18rem",
                height: "100vh",
                background: COLOR.background,
                overflow: "hidden",
            }}
        >
            <Outlet />
        </main>
    </div>
);

export default Layout;
