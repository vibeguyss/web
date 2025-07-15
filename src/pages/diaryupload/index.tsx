import * as S from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/useUserState";
import customAxios from "../../api/customAxios";

const DiaryUpload = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { user } = useUserStore();

    const handleSubmit = async () => {
        if (!user?.userId) {
            console.log("로그인");
            console.log(user?.userId);
            return;
        }

        const postData = {
            userId: user.userId,
            title,
            content,
        };

        try {
            const res = await customAxios.post("/daily", postData);

            if (res.status === 200) {
                alert("등록되었습니다.");
                navigate("/diarylist");
            } else {
                alert("등록 실패: 서버 응답 오류");
                console.log("dㅗㄹㅠ");
                console.log(res.status);
            }
        } catch (err: any) {
            console.log("등록 실패, userId:", user?.userId);
            console.error(err);
            alert("일기 등록 중 오류가 발생했습니다.");
        }
    };

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

                <S.Button disabled={!title || !content} onClick={handleSubmit}>
                    작성 완료
                </S.Button>
            </S.ContentWrapper>
        </S.Container>
    );
};

export default DiaryUpload;
