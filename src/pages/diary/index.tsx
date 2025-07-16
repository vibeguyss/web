import { useNavigate, useParams } from "react-router-dom";
import * as S from "./style";
import { useEffect, useState } from "react";
import customAxios from "../../api/customAxios";

const feedbackMessages = [
    "당신의 감정이 고스란히 전해졌어요. 응원할게요.",
    "마음이 많이 힘들었겠어요. 하지만 잘 이겨내고 있어요.",
    "진심 어린 일기에 공감이 많이 가요.",
    "조금씩 나아지고 있다는 걸 잊지 마세요.",
    "당신의 이야기에 귀 기울이고 있어요.",
    "누군가는 항상 당신의 편이에요.",
];

const Diary = () => {
    interface Diary {
        dailyId: number;
        title: string;
        content: string;
    }

    const { id } = useParams();
    const navigate = useNavigate();
    const [diaries, setDiaries] = useState<Diary | null>(null);
    const [feedback, setFeedback] = useState<string>("");

    const fetchDiary = async () => {
        try {
            const res = await customAxios.get(`/daily/${id}`);
            if (res.status === 200) {
                setDiaries(res.data.data);
                const random = Math.floor(Math.random() * feedbackMessages.length);
                setFeedback(feedbackMessages[random]);
            }
        } catch (err: any) {
            console.log("오류");
        }
    };

    useEffect(() => {
        fetchDiary();
    }, []);

    return (
        <S.Container>
            <S.ContentWrapper>
                <S.DetailWrapper>
                    <S.TitleWrapper>
                        <S.Arrow
                            src="/arrow.svg"
                            onClick={() => navigate("/diarylist")}
                        />
                        <S.Title>{diaries?.title}</S.Title>
                    </S.TitleWrapper>
                    <S.Date>2024.02.05</S.Date>
                </S.DetailWrapper>
                <S.Divider />
                <S.Content>{diaries?.content}</S.Content>
                <S.FeedbackWrapper>
                    <S.FeedbackTitle>🧠 공감 피드백</S.FeedbackTitle>
                    <S.FeedbackText>{feedback}</S.FeedbackText>
                </S.FeedbackWrapper>
            </S.ContentWrapper>
        </S.Container>
    );
};

export default Diary;
