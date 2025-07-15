import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Chat from "../pages/chat";
import Profile from "../pages/profile";
import Diary from "../pages/diary";
import Diaryupload from "../pages/diaryupload";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="chat" element={<Chat />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="diary" element={<Diary />} />
                    <Route path="diaryupload" element={<Diaryupload />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
