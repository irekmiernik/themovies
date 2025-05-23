import styled from "styled-components";
import { css } from "styled-components";

export const StyledButton = styled.button`
  border-radius: 5px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;

  ${({ $reverse }) => $reverse && css`
    background: ${({ theme }) => theme.colors.grey};
  `}
  ${({ $next }) => $next && css`
    background: ${({ theme }) => theme.colors.lightBlue};
  `}

  @media (max-width: 450px) {
    max-width: 38px;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: auto;
  margin: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media (max-width: 450px) {
   max-width: 232px;
   font-size: 10px;
   gap: 8px;
   margin: auto;
   margin-top: 24px;
  }
`;

export const GraySpan = styled.span`
  color: ${({ theme }) => theme.colors.darkerGrey};
`;
export const BlueSpan = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`;