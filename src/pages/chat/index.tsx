import { useEffect, useState } from "react";
import Blackchat from "../../components/chatmodel/blackchat";
import Whitechat from "../../components/chatmodel/whitechat";
import * as S from "./style";
import useUserStore from "../../store/useUserState";
import { io, Socket } from "socket.io-client";
import { useParams } from "react-router-dom";

interface Message {
    id: number;
    senderId: number;
    message: string;
    createdAt: string;
}

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const { user } = useUserStore();
    const myUserId = user?.userId ?? -1;
    const { roomId } = useParams();
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io(import.meta.env.VITE_SOCKET_URL);
        setSocket(newSocket);

        console.log("📡 소켓 연결됨:", newSocket.id);
        console.log("🚪 joinRoom emit:", roomId);
        newSocket.emit("joinRoom", roomId);

        newSocket.on("message", (msg: Message) => {
            console.log("📩 수신한 메시지:", msg);
            setMessages((prev) => [...prev, msg]);
        });

        return () => {
            newSocket.disconnect();
        };
    }, [roomId]);

    const handleSend = () => {
        if (input.trim() === "" || !socket) return;
        const msg: Message = {
            id: Date.now(),
            senderId: myUserId,
            message: input,
            createdAt: new Date().toISOString(),
        };
        socket.emit("message", msg);
        setMessages((prev) => [...prev, msg]);
        setInput("");
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
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                    placeholder="메시지를 입력하세요..."
                />
                <S.ChatArrow src="/send.svg" onClick={handleSend} />
            </S.ChatContainerWrapper>
        </S.Container>
    );
};

export default Chat;
