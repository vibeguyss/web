import * as S from "./style";

interface BlackChat {
    content: string;
}

const Blackchat = ({ content }: BlackChat) => {
    return (
        <S.MessageWrapper>
            <S.Container>{content}</S.Container>
        </S.MessageWrapper>
    );
};

export default Blackchat;
