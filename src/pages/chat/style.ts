import styled from "styled-components";
import { COLOR } from "../../color/color";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 3rem;
    box-sizing: border-box;
    position: relative;
`;

export const ChatWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    box-sizing: border-box;
    padding-bottom: 8rem;
    overflow-y: auto;
`;

export const ChatContainerWrapper = styled.div`
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 800px;
    background-color: ${COLOR.white};
    padding: 1.5rem 4rem 1.5rem 1.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
`;

export const ChatContainer = styled.textarea`
    flex: 1;
    font-size: 1rem;
    border: none;
    resize: none;
    outline: none;
    background: transparent;
    color: ${COLOR.black};
    width: 100%;
`;

export const ChatArrow = styled.img`
    width: 2rem;
    cursor: pointer;
    position: absolute;
    right: 1.5rem;
    bottom: 1.5rem;
`;
