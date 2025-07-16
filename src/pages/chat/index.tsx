import { useState, useRef, useEffect } from "react";
import Blackchat from "../../components/chatmodel/blackchat";
import Whitechat from "../../components/chatmodel/whitechat";
import * as S from "./style";
import { v4 as uuidv4 } from "uuid";
import useUserStore from "../../store/useUserState";

interface Message {
    id: string;
    senderId: number;
    message: string;
    createdAt: string;
    isLoading?: boolean;
    expertType?: "legal" | "medical" | "financial" | "tech" | "business";
    isExpert?: boolean;
}

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [isExpertMode, setIsExpertMode] = useState(false);
    const { user } = useUserStore();
    const myUserId = user?.userId ?? 500;
    const loadingIdRef = useRef<string | null>(null);

    // 더미 응답 생성 함수
    const generateDummyResponse = (isExpert: boolean = false) => {
        const generalResponses = [
            "안녕하세요! 무엇을 도와드릴까요?",
            "그렇게 생각하시는군요. 좋은 의견이네요.",
            "더 자세히 설명해드리겠습니다.",
            "이런 방법은 어떨까요?",
            "좋은 질문이네요! 답변드리겠습니다.",
            "제가 도움이 될 수 있는 부분을 찾아보겠습니다.",
            "이 문제에 대해 다른 접근 방법도 있어요.",
            "궁금한 점이 더 있으시면 언제든 물어보세요.",
        ];

        const expertResponses = {
            legal: [
                "법적 관점에서 말씀드리면, 관련 법규를 확인해보겠습니다.",
                "계약서 검토 시 이런 조항들을 주의깊게 보셔야 합니다.",
                "판례상 이런 경우에는 다음과 같은 결과가 나온 바 있습니다.",
                "법률 전문가로서 권하는 방법은 다음과 같습니다.",
            ],
            medical: [
                "의학적으로 말씀드리면, 이런 증상들을 체크해보세요.",
                "전문의 상담을 받으시는 것을 강력히 권합니다.",
                "예방 차원에서 이런 생활습관을 권해드려요.",
                "치료 과정에서 이런 점들을 유의하셔야 합니다.",
            ],
            financial: [
                "금융 전문가로서 이런 전략을 제안드립니다.",
                "현재 시장 상황을 고려하면 이런 방향이 좋겠습니다.",
                "리스크 관리 차원에서 분산투자를 권합니다.",
                "세금 최적화 방안을 함께 검토해보겠습니다.",
            ],
            tech: [
                "기술적 관점에서 이런 솔루션을 제안드립니다.",
                "최신 기술 동향을 반영하면 이런 방법이 효과적입니다.",
                "성능 최적화를 위해 이런 접근을 해보세요.",
                "보안 측면에서 이런 점들을 고려하셔야 합니다.",
            ],
            business: [
                "비즈니스 관점에서 이런 전략을 추천합니다.",
                "시장 분석 결과를 바탕으로 이런 방향을 제시합니다.",
                "경쟁 우위를 확보하려면 이런 접근이 필요합니다.",
                "수익성 개선을 위한 방안을 제안드리겠습니다.",
            ],
        };

        if (isExpert) {
            const expertTypes = [
                "legal",
                "medical",
                "financial",
                "tech",
                "business",
            ] as const;
            const randomExpertType =
                expertTypes[Math.floor(Math.random() * expertTypes.length)];
            const responses = expertResponses[randomExpertType];
            return {
                message:
                    responses[Math.floor(Math.random() * responses.length)],
                expertType: randomExpertType,
                isExpert: true,
            };
        }

        return {
            message:
                generalResponses[
                    Math.floor(Math.random() * generalResponses.length)
                ],
            isExpert: false,
        };
    };

    // 초기 메시지 로드
    useEffect(() => {
        const initialMessages: Message[] = [];
        const messageCount = 8;

        for (let i = 0; i < messageCount; i++) {
            const isUser = i % 2 === 0;
            const senderId = isUser ? myUserId : 0;

            if (isUser) {
                const userMessages = [
                    "안녕하세요!",
                    "도움이 필요해요.",
                    "이것에 대해 설명해주세요.",
                    "어떻게 해야 하나요?",
                    "추천해주세요.",
                    "방법을 알려주세요.",
                    "궁금한 게 있어요.",
                    "조언 부탁드려요.",
                ];

                initialMessages.push({
                    id: uuidv4(),
                    senderId,
                    message:
                        userMessages[
                            Math.floor(Math.random() * userMessages.length)
                        ],
                    createdAt: new Date(
                        Date.now() - (messageCount - i) * 60000
                    ).toISOString(),
                });
            } else {
                const response = generateDummyResponse(isExpertMode);
                initialMessages.push({
                    id: uuidv4(),
                    senderId,
                    message: response.message,
                    createdAt: new Date(
                        Date.now() - (messageCount - i) * 60000
                    ).toISOString(),
                    expertType: response.expertType,
                    isExpert: response.isExpert,
                });
            }
        }

        setMessages(initialMessages);
    }, [isExpertMode, myUserId]);

    // 메시지 전송
    const handleSend = async () => {
        if (input.trim() === "" || isProcessing) return;

        setIsProcessing(true);
        const messageText = input.trim();
        setInput("");

        // 사용자 메시지 추가
        const userMsg: Message = {
            id: uuidv4(),
            senderId: myUserId,
            message: messageText,
            createdAt: new Date().toISOString(),
        };

        setMessages((prev) => [...prev, userMsg]);

        try {
            // 로딩 메시지 추가
            const loadingId = uuidv4();
            loadingIdRef.current = loadingId;

            const loadingMsg: Message = {
                id: loadingId,
                senderId: 0,
                message: "답변을 생성하고 있습니다...",
                createdAt: new Date().toISOString(),
                isLoading: true,
            };

            setMessages((prev) => [...prev, loadingMsg]);

            // 응답 지연 시뮬레이션
            await new Promise((resolve) =>
                setTimeout(resolve, 1000 + Math.random() * 2000)
            );

            const response = generateDummyResponse(isExpertMode);

            setMessages((prev) => [
                ...prev.filter((msg) => msg.id !== loadingId),
                {
                    id: uuidv4(),
                    senderId: 0,
                    message: response.message,
                    createdAt: new Date().toISOString(),
                    expertType: response.expertType,
                    isExpert: response.isExpert,
                },
            ]);
        } catch (error) {
            console.error("응답 생성 실패:", error);

            // 로딩 메시지 제거
            if (loadingIdRef.current) {
                setMessages((prev) =>
                    prev.filter((msg) => msg.id !== loadingIdRef.current)
                );
            }

            // 에러 메시지 추가
            setMessages((prev) => [
                ...prev,
                {
                    id: uuidv4(),
                    senderId: 0,
                    message:
                        "죄송합니다. 응답 생성에 실패했습니다. 다시 시도해주세요.",
                    createdAt: new Date().toISOString(),
                },
            ]);
        } finally {
            loadingIdRef.current = null;
            setIsProcessing(false);
        }
    };

    // 엔터 키 처리
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <S.Container>
            <S.ChatWrapper>
                {messages.map((msg) =>
                    msg.senderId === myUserId ? (
                        <Blackchat key={msg.id} content={msg.message} />
                    ) : (
                        <Whitechat key={msg.id} content={msg.message} />
                    )
                )}
            </S.ChatWrapper>

            <S.ChatContainerWrapper>
                <S.ChatContainer
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="메시지를 입력하세요..."
                    disabled={isProcessing}
                />
                <S.ChatArrow
                    src="/send.svg"
                    alt="전송"
                    onClick={handleSend}
                    style={{
                        opacity: isProcessing ? 0.5 : 1,
                        cursor: isProcessing ? "not-allowed" : "pointer",
                    }}
                />
            </S.ChatContainerWrapper>
        </S.Container>
    );
};

export default Chat;
