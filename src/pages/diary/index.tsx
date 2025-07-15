import { useNavigate, useParams } from "react-router-dom";
import * as S from "./style";
import { useEffect, useState } from "react";
import customAxios from "../../api/customAxios";

const Diary = () => {
    interface Diary {
        dailyId: number;
        title: string;
        content: string;
    }
    const { id } = useParams();
    const navigate = useNavigate();
    const [diaries, setDiaries] = useState<Diary | null>(null);
    const fetchDiary = async () => {
        try {
            const res = await customAxios.get(`/daily/${id}`);
            if (res.status === 200) {
                setDiaries(res.data.data);
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
            </S.ContentWrapper>
        </S.Container>
    );
};

export default Diary;
