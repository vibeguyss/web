import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Hero>
                <Title>트라우마, 함께 극복해요</Title>
                <Subtitle>
                    당신의 상처는 사라지지 않지만, 함께하면 덜 아파질 수 있어요.
                </Subtitle>
            </Hero>

            <Section>
                <SectionTitle>주요 기능</SectionTitle>
                <Features>
                    <FeatureBox
                        onClick={() => navigate("/diarylist")}
                        role="button"
                        tabIndex={0}
                    >
                        <Icon>📓</Icon>
                        <h3>나의 일기 작성</h3>
                        <p>마음속 이야기를 기록하고 차근차근 회복해보세요.</p>
                    </FeatureBox>
                    <FeatureBox
                        onClick={() => navigate("/chat")}
                        role="button"
                        tabIndex={0}
                    >
                        <Icon>💬</Icon>
                        <h3>채팅하기</h3>
                        <p>전문가 또는 AI와 채팅해봐요.</p>
                    </FeatureBox>
                </Features>
            </Section>

            <Testimonial>
                <blockquote>
                    "이곳에서 일기를 쓰며 내 마음을 정리할 수 있었어요."
                </blockquote>
                <cite>- 익명의 사용자</cite>
            </Testimonial>

            <CTA>
                <h2>당신의 이야기를 들려주세요</h2>
                <CTAButton onClick={() => navigate("/diaryupload")}>
                    일기 쓰기 시작하기
                </CTAButton>
            </CTA>
        </Container>
    );
};

export default Home;

const Container = styled.div`
    flex: 1; /* 사이드바 옆 영역 전체 차지 */
    font-family: "Pretendard", sans-serif;
    color: #2c2c2c;
    padding: 3rem 2rem;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 0 auto;
    background-color: transparent;
`;

const Hero = styled.section`
    text-align: center;
    margin-bottom: 4rem;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
`;

const Subtitle = styled.p`
    font-size: 1.2rem;
    color: #666666;
    margin-bottom: 2rem;
`;

const Section = styled.section`
    margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
    font-size: 1.7rem;
    font-weight: 600;
    margin-bottom: 2rem;
    text-align: center;
`;

const Features = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
`;

const FeatureBox = styled.div`
    background-color: #e6f0ff;
    padding: 1.5rem;
    border-radius: 1rem;
    flex: 1 1 250px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        background-color: #d0e6ff;
    }
`;

const Icon = styled.div`
    font-size: 2rem;
    margin-bottom: 0.5rem;
`;

const Testimonial = styled.section`
    background-color: #e6f0ff;
    padding: 2rem;
    border-left: 5px solid #4a90e2;
    margin-bottom: 4rem;
    font-style: italic;

    blockquote {
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
    }

    cite {
        display: block;
        text-align: right;
        font-size: 0.9rem;
        color: #888;
    }
`;

const CTA = styled.section`
    text-align: center;
    margin-top: 6rem;
    
    h2 {
        font-size: 1.8rem;
        margin-bottom: 2rem;
    }
`;

const CTAButton = styled.button`
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
    background-color: #4a90e2;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    color: white;
    font-weight: 600;
    transition: 0.3s ease;
    &:hover {
        background-color: #357abd;
    }
`;