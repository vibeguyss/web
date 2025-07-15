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
    box-shadow: 4px 3px 25px 0px ${COLOR.gray};
    background-color: white;
`;

export const Content = styled.div`
    padding: 1.7rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const Logo = styled.img`
    width: 10rem;
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
    border-radius: 0.25rem;
    background-color: ${COLOR.white};
`;

export const ElemText = styled.div`
    font-size: 1rem;
    font-weight: 400;
`;
