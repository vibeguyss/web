import { useNavigate, useParams } from "react-router-dom";
import * as S from "./style";

const Diary = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <S.Container>
            <S.ContentWrapper>
                <S.DetailWrapper>
                    <S.TitleWrapper>
                        <S.Arrow
                            src="/arrow.svg"
                            onClick={() => navigate("/diarylist")}
                        />
                        <S.Title>제목제목제목</S.Title>
                    </S.TitleWrapper>
                    <S.Date>2024.02.05</S.Date>
                </S.DetailWrapper>
                <S.Divider />
                <S.Content>
                    안녀엫재ㅓㅔㅐㅎ더ㅔㅐ허재ㅔ더ㅔㅐㄷ저헤ㅐㅓ
                </S.Content>
            </S.ContentWrapper>
        </S.Container>
    );
};

export default Diary;
