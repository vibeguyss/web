import * as S from "./style";

const Whitechat = ({ content }: { content: string }) => {
    return (
        <S.Wrapper>
            <S.Bubble>{content}</S.Bubble>
        </S.Wrapper>
    );
};

export default Whitechat;
