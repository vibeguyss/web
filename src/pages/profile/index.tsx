import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./style";

interface UserData {
    name: string;
    profileImageUrl: string;
}

const Profile = () => {
    const [user, setUser] = useState<UserData | null>(null);

    const fetchMe = async () => {
        try {
            const token = localStorage.getItem("accessToken");

            const res = await axios.get(`${import.meta.env.VITE_API_URL}/user/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setUser(res.data);
        } catch (err) {
            console.error("❌ 사용자 정보 가져오기 실패:", err);
        }
    };

    useEffect(() => {
        fetchMe();
    }, []);

    return (
        <S.Container>
            {user && (
                <S.ProfileWrapper>
                    <S.ProfileImage src={user.profileImageUrl} alt="프로필 이미지" />
                    <S.Greeting>
                        <strong>{user.name}</strong>님, 안녕하세요 👋
                    </S.Greeting>
                </S.ProfileWrapper>
            )}
        </S.Container>
    );
};

export default Profile;