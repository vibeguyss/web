import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import useUserStore from "../../store/useUserState";

const Profile = () => {
    const navigate = useNavigate();
    const { user, setUser } = useUserStore();
    const [message, setMessage] = useState("");
    const [mood, setMood] = useState("");

    const moods = [
        { emoji: "😄", text: "기분이 좋아 보여요!" },
        { emoji: "😊", text: "오늘 하루 평온하시길 바라요." },
        { emoji: "😌", text: "조용히 차분한 하루네요." },
        { emoji: "🥲", text: "조금 힘들진 않으신가요?" },
        { emoji: "😢", text: "마음이 무겁다면 털어놓아도 괜찮아요." },
        { emoji: "🔥", text: "열정 가득한 하루네요!" },
    ];

    const encouragingMessages = [
        "오늘 하루도 충분히 잘하고 있어요.",
        "당신은 생각보다 훨씬 강한 사람이에요.",
        "작은 일에도 의미가 있어요. 당신은 잘하고 있어요.",
        "마음이 무거울 땐 천천히 쉬어가도 괜찮아요.",
        "누군가는 항상 당신을 응원하고 있어요.",
        "당신이 얼마나 노력하고 있는지 알고 있어요.",
        "잠깐 멈춰도 괜찮아요. 당신의 속도를 믿어요.",
        "지금 이 순간도 당신은 충분히 소중해요.",
    ];

    const fetchMe = async () => {
        try {
            const token = localStorage.getItem("accessToken");

            if (!token) {
                navigate("/auth");
                return;
            }

            const res = await axios.get(
                `${import.meta.env.VITE_API_URL}/user/me`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setUser(res.data.data);

            const moodRandom = moods[Math.floor(Math.random() * moods.length)];
            const messageRandom =
                encouragingMessages[
                    Math.floor(Math.random() * encouragingMessages.length)
                ];

            setMood(`${moodRandom.emoji} ${moodRandom.text}`);
            setMessage(messageRandom);
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
                    <S.ProfileImage src={user.imageUrl} alt="프로필 이미지" />
                    <S.InfoWrapper>
                        <S.Greeting>
                            <strong>{user.name}</strong>님, 반가워요 👋
                        </S.Greeting>
                        <S.Mood>{mood}</S.Mood>
                        <S.Message>"{message}"</S.Message>
                    </S.InfoWrapper>
                </S.ProfileWrapper>
            )}
        </S.Container>
    );
};

export default Profile;
