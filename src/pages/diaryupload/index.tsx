import * as S from "./style";
import { useState } from "react";

const Diaryupload = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <S.Container>
            <S.ContentWrapper>
                <S.Title>일기 작성</S.Title>
                <S.Divider />
                <S.Label>일기 제목</S.Label>
                <S.Input
                    placeholder="제목을 입력해 주세요."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <S.Label>일기 내용</S.Label>
                <S.TextArea
                    placeholder="내용을 입력해 주세요."
                    maxLength={3000}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <S.TextCounter>{content.length} / 3000</S.TextCounter>

                <S.Button disabled={title === "" || content === ""}>
                    작성 완료
                </S.Button>
            </S.ContentWrapper>
        </S.Container>
    );
};

export default Diaryupload;
