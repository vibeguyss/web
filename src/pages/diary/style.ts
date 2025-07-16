import styled from "styled-components";
import { COLOR } from "../../color/color";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 3rem 20px;
    box-sizing: border-box;
`;

export const Title = styled.div`
    font-size: 2rem;
    font-weight: 600;
`;

export const Date = styled.div`
    font-size: 1rem;
    font-weight: 400;
    color: ${COLOR.gray};
`;

export const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Arrow = styled.img`
    transform: scaleX(-1);
    height: 2rem;
    cursor: pointer;
`;

export const DetailWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TitleWrapper = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    font-size: 1.2rem;
    color: ${COLOR.black};
    word-break: break-all;
`;

export const Divider = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${COLOR.main};
`;

export const FeedbackWrapper = styled.div`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #f6f8fa;
    border-left: 4px solid #4f7cac;
    border-radius: 8px;
`;

export const FeedbackTitle = styled.h3`
    margin: 0;
    font-size: 1.1rem;
    color: #4f7cac;
    font-weight: bold;
`;

export const FeedbackText = styled.p`
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #333;
    line-height: 1.5;
`;
