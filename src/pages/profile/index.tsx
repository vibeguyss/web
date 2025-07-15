import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
    const fetchMe = async () => {
        try {
            const token = localStorage.getItem("accessToken");

            const res = await axios.get(
                `${import.meta.env.VITE_API_URL}/user/me`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            
            console.log("내 정보", res.data);
        } catch (err) {
            console.error("❌ 일기 가져오기 실패:", err);
        }
    };
    useEffect(() => {
        fetchMe();
    }, []);
    return <div></div>;
};

export default Profile;
