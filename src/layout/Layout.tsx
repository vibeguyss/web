import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { COLOR } from "../color/color";

const Layout = () => (
    <div style={{ display: "flex", background: COLOR.background }}>
        <Sidebar />
        <main
            style={{
                flex: 1,
                paddingLeft: "18rem",
                height: "100vh",
                paddingTop: "3rem",
                background: COLOR.background,
            }}
        >
            <Outlet />
        </main>
    </div>
);

export default Layout;
