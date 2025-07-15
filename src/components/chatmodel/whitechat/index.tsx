import * as S from "./style";

interface WhiteChat {
    content: string;
}

const WhiteChat = ({ content }: WhiteChat) => {
    return (
        <S.MessageWrapper>
            <S.Container>{content}</S.Container>
        </S.MessageWrapper>
    );
};

export default WhiteChat;
