import styled from "styled-components";
import { COLOR } from "../../../color/color";

export const MessageWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.5rem;
`;

export const Container = styled.div`
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    background-color: ${COLOR.white};
    color: ${COLOR.black};
    font-size: 1rem;
    max-width: 70%;
    word-break: break-word;
`;
