import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { COLOR } from "../color/color";

const Layout = () => (
    <div
        style={{
            display: "flex",
            background: COLOR.background,
            minHeight: "100vh", 
        }}
    >
        <Sidebar />
        <main
            style={{
                flex: 1,
                paddingLeft: "18rem",
                background: COLOR.background,
                overflowY: "auto",
            }}
        >
            <Outlet />
        </main>
    </div>
);

export default Layout;
