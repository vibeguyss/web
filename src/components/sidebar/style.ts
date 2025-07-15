import styled from "styled-components";
import { COLOR } from "../../color/color";

export const Container = styled.div`
    width: 16rem;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid ${COLOR.gray};
    background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
    box-shadow: 2px 0 15px rgba(0, 0, 0, 0.03);
`;

export const Content = styled.div`
    padding: 1.7rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const Logo = styled.img`
    width: 10rem;
    transition: transform 0.3s ease;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.05));

    &:hover {
        transform: scale(1.02);
    }
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const Elem = styled.div<{ $isselected: boolean }>`
    width: 100%;
    display: flex;
    align-items: center;
    height: 3rem;
    color: ${({ $isselected }) => ($isselected ? COLOR.main : COLOR.black)};
    cursor: pointer;
    gap: 1.5rem;
    border-radius: 0.5rem;
    padding: 0 0.8rem;
    background-color: ${({ $isselected }) =>
        $isselected
            ? `linear-gradient(135deg, ${COLOR.main}15 0%, ${COLOR.main}08 100%)`
            : "transparent"};
    background: ${({ $isselected }) =>
        $isselected
            ? `linear-gradient(135deg, ${COLOR.main}15 0%, ${COLOR.main}08 100%)`
            : "transparent"};
    border: ${({ $isselected }) =>
        $isselected ? `1px solid ${COLOR.main}20` : "1px solid transparent"};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
        );
        transition: left 0.5s ease;
    }

    &:hover {
        background: ${({ $isselected }) =>
            $isselected
                ? `linear-gradient(135deg, ${COLOR.main}20 0%, ${COLOR.main}10 100%)`
                : "rgba(0, 0, 0, 0.02)"};
        border: 1px solid ${COLOR.main}15;
        transform: translateX(3px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

        &::before {
            left: 100%;
        }
    }

    &:active {
        transform: translateX(1px);
        transition: transform 0.1s ease;
    }
`;

export const ElemText = styled.div`
    font-size: 1rem;
    font-weight: 400;
    transition: font-weight 0.3s ease;

    ${Elem}:hover & {
        font-weight: 500;
    }
`;
