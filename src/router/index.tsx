import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Chat from "../pages/chat";
import Profile from "../pages/profile";
import Diaryupload from "../pages/diaryupload";
import DiaryList from "../pages/diaryList";
import Diary from "../pages/diary";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="chat" element={<Chat />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="diarylist" element={<DiaryList />} />
                    <Route path="diaryupload" element={<Diaryupload />} />
                    <Route path="diary/:id" element={<Diary />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
