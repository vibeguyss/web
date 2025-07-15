import { useNavigate } from "react-router-dom";
import * as S from "./style";

interface DiaryElem {
    title: string;
    detail: string;
    link: number;
}

const Diaryelem = ({ title, detail, link }: DiaryElem) => {
    const navigate = useNavigate();
    return (
        <S.Container onClick={() => navigate(`/diary/${link}`)}>
            <S.Wrapper>
                <S.Title>{title}</S.Title>
                <S.Date>{detail}</S.Date>
            </S.Wrapper>
            <S.Button src="/arrow.svg"></S.Button>
        </S.Container>
    );
};

export default Diaryelem;
