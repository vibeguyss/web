import styled from "styled-components";
import { COLOR } from "../../color/color";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 3rem;
    box-sizing: border-box;
`;

export const ElemWrapper = styled.div`
    width: 100%;
`;

export const ContentWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Divider = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${COLOR.main};
    padding: 0px 20px;
`;
