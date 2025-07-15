import Diaryelem from "../../components/diary/diaryelem";
import * as S from"./style"

const Diary = () => {
    return <S.Container>

        <S.ContentWrapper>
            <div
            style={{
                fontSize:'2rem',
                fontWeight: 600
            }}>내 일기</div>
            <S.Divider/>
            <S.ElemRapper>
                <Diaryelem/>
                <Diaryelem/>
            </S.ElemRapper>
            </S.ContentWrapper>
        </S.Container>;
};

export default Diary;
