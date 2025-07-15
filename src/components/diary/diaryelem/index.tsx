import * as S from "./style";

interface DiaryElem {
    title: string;
    detail: string;
    link: any;
}

const Diaryelem = ({ title, detail, link }: DiaryElem) => {
    return (
        <S.Container>
            <S.Wrapper>
                <S.Title>{title}</S.Title>
                <S.Date>{detail}</S.Date>
            </S.Wrapper>
            <S.Button src="/arrow.svg" onClick={link}></S.Button>
        </S.Container>
    );
};

export default Diaryelem;
