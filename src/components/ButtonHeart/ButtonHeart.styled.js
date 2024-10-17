import { styled } from "styled-components";

export const HeartButton = styled.button`
  display: flex;
  justify-content: center;
  width: 35px;
  height: 35px;
  border: transparent;
  background-color: transparent;

  svg {
    fill: red;
    stroke: red;
    transition: fill 0.3s ease, stroke 0.3s ease;
  }
`;
