import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/useUserState";
import customAxios from "../../api/customAxios";
import Diaryelem from "../../components/diaryelem";
import * as S from "./style";

interface Diary {
    dailyId: number;
    title: string;
    content: string;
}

const DiaryList = () => {
    const navigate = useNavigate();
    const { user } = useUserStore();
    const [diaries, setDiaries] = useState<Diary[]>([]);

    const fetchData = async () => {
        if (!user?.userId) {
            console.warn("유저 아이디가 없습니다.");
            return;
        }
        try {
            const res = await customAxios.get(`/daily`);
            console.log("API 응답 전체:", res);
            console.log("API 응답 data:", res.data);
            setDiaries(res.data.data);
        } catch (error) {
            console.error("일기 목록 불러오기 실패:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [user]);

    return (
        <S.Container>
            <S.ContentWrapper>
                <S.TitleWrapper>
                    <div
                        style={{
                            fontSize: "2rem",
                            fontWeight: 600,
                        }}
                    >
                        내 일기
                    </div>
                    <div
                        style={{
                            fontSize: "1.6rem",
                            fontWeight: "600",
                            cursor: "pointer",
                        }}
                        onClick={() => navigate(`/diaryupload`)}
                    >
                        +
                    </div>
                </S.TitleWrapper>
                <S.ElemWrapper>
                    {Array.isArray(diaries) && diaries.length === 0 && (
                        <p>작성된 일기가 없습니다.</p>
                    )}
                    {Array.isArray(diaries) &&
                        diaries.map((diary) => (
                            <Diaryelem
                                key={diary.dailyId}
                                id={diary.dailyId}
                                title={diary.title}
                                detail={diary.content}
                            />
                        ))}
                </S.ElemWrapper>
            </S.ContentWrapper>
        </S.Container>
    );
};

export default DiaryList;
