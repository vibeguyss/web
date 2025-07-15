import styled from "styled-components";
import { COLOR } from "../../color/color";

interface ButtonProps {
    isSelected: boolean;
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 3rem;
    box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 90%;
`;

export const Title = styled.div`
    font-size: 2rem;
    font-weight: 600;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

export const Button = styled.div<ButtonProps>`
    display: inline-flex;
    padding: 0.4rem 1rem;
    border-radius: 1rem;
    color: ${(props) => (props.isSelected ? COLOR.white : COLOR.black)};
    background-color: ${(props) => (props.isSelected ? COLOR.main : "")};
    border: ${(props) => (props.isSelected ? "" : COLOR.main)};
    cursor: pointer;
`;

export const ElemWrapper = styled.div`
    width: 100%;
`;
