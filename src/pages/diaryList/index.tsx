import { useNavigate } from "react-router-dom";
import Diaryelem from "../../components/diaryelem";
import * as S from "./style";

const DiaryList = () => {
    const navigate = useNavigate();
    return (
        <S.Container>
            <S.ContentWrapper>
                <S.TitleWrapper>
                    <div
                        style={{
                            fontSize: "2rem",
                            fontWeight: 600,
                        }}
                    >
                        내 일기
                    </div>
                    <div
                        style={{
                            fontSize: "1.6rem",
                            fontWeight: "600",
                            cursor: "pointer",
                        }}
                        onClick={() => navigate(`/diaryupload`)}
                    >
                        +
                    </div>
                </S.TitleWrapper>
                <S.ElemWrapper>
                    <Diaryelem
                        title="너무 좋은 일"
                        detail="정말 좋았던 일"
                        id={1}
                    />
                    <Diaryelem
                        title="너무 좋은 일"
                        detail="정말 좋았던 일"
                        id={2}
                    />
                </S.ElemWrapper>
            </S.ContentWrapper>
        </S.Container>
    );
};

export default DiaryList;
