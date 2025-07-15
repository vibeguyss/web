import { useEffect, useState } from "react";
import * as S from "./style";
import Chatelem from "../../components/chatelem";
import useUserStore from "../../store/useUserState";
import customAxios from "../../api/customAxios";

const ChatList = () => {
    interface ListProps {
        userId: number;
        name: string;
        imageUrl: string;
    }
    const [isSelected, setIsSelected] = useState<boolean>(true);
    const [list, setList] = useState<ListProps[]>([]);
    const { user } = useUserStore();

    const fetchData = async () => {
        if (!user?.userId) {
            console.warn("유저 아이디가 없습니다.");
            return;
        }
        try {
            const res = await customAxios.get(`/daily/doctor`);
            console.log("API 응답 전체:", res);
            console.log("API 응답 data:", res.data);
            setList(res.data.data);
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
                    {" "}
                    {Array.isArray(list) && list.length === 0 && (
                        <p>작성된 일기가 없습니다.</p>
                    )}
                    {Array.isArray(list) &&
                        list.map((l) => (
                            <Chatelem title={l.name} id={l.userId} />
                        ))}
                </S.ElemWrapper>
            </S.ContentWrapper>
        </S.Container>
    );
};

export default ChatList;
