import { styled } from 'styled-components';

export const StyledMain = styled.main`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
`;

export const StyledSection = styled.section`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondaryBgColor};
  @media only screen and (min-width: 1440px) {
  padding: 0 128px 96px 128px;
  }
`;
export const Text = styled.p`
 margin-top: 62px;
 font-family: var(--family);
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primaryTxtColor};
`;



export const ButtonTop = styled.button`
  position: fixed; 
  right: 3%; 
  bottom: 3%; 
  padding: 10px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.buttonBgColor};
  transition: background-color ${({ theme }) => theme.animation.transition}; /* Fixed syntax for transition */

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;
