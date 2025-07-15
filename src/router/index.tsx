import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Profile from "../pages/profile";
import Diaryupload from "../pages/diaryupload";
import DiaryList from "../pages/diaryList";
import Diary from "../pages/diary";
import ChatList from "../pages/chatList";
import Chat from "../pages/chat";
import AuthPage from "../pages/auth/AuthPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="chat" element={<ChatList />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="diarylist" element={<DiaryList />} />
                    <Route path="diaryupload" element={<Diaryupload />} />
                    <Route path="diary/:id" element={<Diary />} />
                    <Route path="chat/:id" element={<Chat />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
