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