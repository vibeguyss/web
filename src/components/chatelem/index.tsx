import { useNavigate } from "react-router-dom";
import * as S from "./style";

interface DiaryElem {
    title: string;
    id: number;
}

const Chatelem = ({ title, id }: DiaryElem) => {
    const navigate = useNavigate();
    return (
        <S.Container onClick={() => navigate(`/chat/${id}`)}>
            <S.Wrapper>
                <S.Title>{title}</S.Title>
            </S.Wrapper>
            <S.Button src="/arrow.svg"></S.Button>
        </S.Container>
    );
};

export default Chatelem;
