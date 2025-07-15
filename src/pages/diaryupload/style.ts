import styled from "styled-components";
import { COLOR } from "../../color/color";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 3rem;
    box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Title = styled.div`
    font-size: 2rem;
    font-weight: 600;
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${COLOR.gray};
    border-radius: 2px;
`;

export const Label = styled.label`
    font-size: 1rem;
    font-weight: 500;
`;

export const Input = styled.input`
    height: 3rem;
    padding: 0 1rem;
    font-size: 1rem;
    border: 1px solid ${COLOR.gray};
    border-radius: 8px;
    outline: none;
    &:focus {
        border: 1px solid ${COLOR.main};
    }
`;

export const TextArea = styled.textarea`
    height: 200px;
    resize: none;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid ${COLOR.gray};
    outline: none;
    &:focus {
        border: 1px solid ${COLOR.main};
    }
`;

export const TextCounter = styled.div`
    align-self: flex-end;
    font-size: 0.875rem;
    color: ${COLOR.main};
`;

export const Button = styled.button<{ disabled?: boolean }>`
    align-self: center;
    width: 8rem;
    height: 3rem;
    font-size: 1rem;
    font-weight: 600;
    background-color: ${({ disabled }) => (disabled ? COLOR.gray : COLOR.main)};
    color: ${({ disabled }) => (disabled ? COLOR.white : COLOR.white)};
    border: none;
    border-radius: 8px;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
