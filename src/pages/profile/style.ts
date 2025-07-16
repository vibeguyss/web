import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-color: #f9f9f9;
`;

export const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background-color: white;
    padding: 2rem 3rem;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const ProfileImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ddd;
`;

export const Greeting = styled.div`
    font-size: 1.5rem;
    font-weight: 500;

    strong {
        font-weight: 700;
        color: #333;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const Mood = styled.p`
    font-size: 1.1rem;
    color: #6c757d;
    margin: 0;
`;

export const Message = styled.p`
    background-color: #f1f3f5;
    padding: 1rem 1.25rem;
    border-radius: 0.75rem;
    font-size: 1rem;
    color: #495057;
    line-height: 1.5;
    max-width: 300px;
`;
