import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    const fetchMe = async () => {
        const token = localStorage.getItem("accessToken");

        if (!token) {
            console.warn("❗ 토큰 없음: 로그인 페이지로 이동");
            navigate("/auth");
            return;
        }

        try {
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
            console.error("❌ 사용자 정보 가져오기 실패:", err);
            // 토큰은 있지만 만료되었을 경우에도 /auth 이동
            navigate("/auth");
        }
    };

    useEffect(() => {
        fetchMe();
    }, []);

    return <div></div>;
};

export default Profile;
