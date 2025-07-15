import { useState } from "react";
import * as S from "./style";
import Chatelem from "../../components/chatelem";

const ChatList = () => {
    const [isSelected, setIsSelected] = useState<boolean>(true);
    return (
        <S.Container>
            <S.ContentWrapper>
                <S.Title>채팅하기</S.Title>
                <S.ButtonWrapper>
                    <S.Button
                        isSelected={isSelected}
                        onClick={() => setIsSelected((prev) => !prev)}
                    >
                        전문가
                    </S.Button>
                    <S.Button
                        isSelected={!isSelected}
                        onClick={() => setIsSelected((prev) => !prev)}
                    >
                        AI
                    </S.Button>
                </S.ButtonWrapper>
                <S.ElemWrapper>
                    <Chatelem title="건강전문가" detail="건강입니다" id={1} />
                </S.ElemWrapper>
            </S.ContentWrapper>
        </S.Container>
    );
};

export default ChatList;
