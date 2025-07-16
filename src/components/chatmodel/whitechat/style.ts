import styled from "styled-components";
import { COLOR } from "../../../color/color";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start; // 왼쪽 정렬
`;

export const Bubble = styled.div`
  background-color: ${COLOR.white};
  color: ${COLOR.black};
  padding: 0.75rem 1.25rem;
  border-radius: 1.25rem;
  max-width: 70%;
  word-break: break-word;
  border: 1px solid ${COLOR.gray};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 1rem;
    left: -8px;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-right: 8px solid ${COLOR.white};
    border-bottom: 8px solid transparent;
  }
`;
