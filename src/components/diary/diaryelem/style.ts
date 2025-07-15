import styled from "styled-components";
import { COLOR } from "../../../color/color";

export const Container = styled.div`
    width: 100%;
    border-color: ${COLOR.gray};
    border-top: 1px solid;
    border-bottom: 1px solid;
    background-color: ${COLOR.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 20px;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const Title = styled.div`
    font-weight: 500;
    text-underline-position: under;
    color: black;
`;

export const Date = styled.div`
    color: #888;
    font-size: 14px;
`;

export const Button = styled.img`
    height: 1rem;
`;