import { useNavigate } from "react-router-dom";
import * as S from "./style";

interface DiaryElem {
    title: string;
    id: number;
    img: string;
}

const Chatelem = ({ title, id, img }: DiaryElem) => {
    const navigate = useNavigate();
    return (
        <S.Container onClick={() => navigate(`/chat/${id}`)}>
            <S.Wrapper>
                <S.Profile src={img} />
                <S.Title>{title}</S.Title>
            </S.Wrapper>
            <S.Button src="/arrow.svg"></S.Button>
        </S.Container>
    );
};

export default Chatelem;
