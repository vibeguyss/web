import { useState } from "react";
import Blackchat from "../../components/chatmodel/blackchat";
import * as S from "./style";

const Chat = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>("");

    const handleSend = () => {
        if (input.trim() === "") return;
        setMessages((prev) => [...prev, input]);
        setInput("");
    };

    return (
        <S.Container>
            <S.ChatWrapper>
                {messages.map((msg, idx) => (
                    <Blackchat key={idx} content={msg} />
                ))}
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
