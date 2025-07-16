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
            console.error("데이터 불러오기 실패:", error);
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
                        onClick={() => setIsSelected(true)}
                    >
                        전문가
                    </S.Button>
                    <S.Button
                        isSelected={!isSelected}
                        onClick={() => setIsSelected(false)}
                    >
                        AI
                    </S.Button>
                </S.ButtonWrapper>

                <S.ElemWrapper>
                    {isSelected ? (
                        <>
                            {Array.isArray(list) && list.length === 0 ? (
                                <p>전문가가 없습니다.</p>
                            ) : (
                                list.map((l) => (
                                    <Chatelem
                                        key={l.userId}
                                        title={l.name}
                                        id={l.userId}
                                        img={l.imageUrl}
                                    />
                                ))
                            )}
                        </>
                    ) : (
                        <Chatelem title="AI와 소통하기" id={500} img="" />
                    )}
                </S.ElemWrapper>
            </S.ContentWrapper>
        </S.Container>
    );
};

export default ChatList;
