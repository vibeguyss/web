import Diaryelem from "../../components/diary/diaryelem";
import * as S from "./style";

const Diary = () => {
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
                    >
                        +
                    </div>
                </S.TitleWrapper>
                <S.Divider />
                <S.ElemWrapper>
                    <Diaryelem
                        title="너무 좋은 일"
                        detail="정말 좋았던 일"
                        link=""
                    />
                    <Diaryelem
                        title="너무 좋은 일"
                        detail="정말 좋았던 일"
                        link=""
                    />
                </S.ElemWrapper>
            </S.ContentWrapper>
        </S.Container>
    );
};

export default Diary;
