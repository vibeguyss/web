import styled from "styled-components";
import { COLOR } from "../../color/color";

export const Container = styled.div`
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1.2rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    margin-bottom: 1rem;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 100%
        );
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);

        &::before {
            opacity: 1;
        }
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }
`;

export const Wrapper = styled.div`
    display: flex;
    gap: 0.5rem;
    position: relative;
    align-items: center;
    z-index: 1;
`;

export const Profile = styled.img`
    height: 2rem;
`;

export const Title = styled.div`
    font-weight: 600;
    color: ${COLOR.black};
    font-size: 1.1rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: color 0.3s ease;

    ${Container}:hover & {
        color: ${COLOR.main};
    }
`;

export const Date = styled.div`
    color: rgba(136, 136, 136, 0.8);
    font-size: 0.875rem;
    font-weight: 400;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    transition: color 0.3s ease;

    ${Container}:hover & {
        color: rgba(136, 136, 136, 1);
    }
`;

export const Button = styled.img`
    height: 1.2rem;
    width: 1.2rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 1;
    opacity: 0.7;

    ${Container}:hover & {
        transform: translateX(4px);
        opacity: 1;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
    }
`;
