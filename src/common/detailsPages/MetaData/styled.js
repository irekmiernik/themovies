import styled, { css } from "styled-components";

export const Wrapper = styled.dl`
  font-weight: 400;
  font-size: 18px;
  margin: 24px 0px 0px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    margin-top: 0px;
  }
`;

export const Row = styled.div`
  margin: 8px 0px 0px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-top: 16px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 8px;
  }
`;

export const Key = styled.dt`
  display: inline;
  color: ${({ theme }) => theme.colors.stormGray};
  margin-right: 10px;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    display: block;
    margin-bottom: 8px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 4px;
  
    ${({ $hideOnMobile }) => $hideOnMobile && css`
      display: none;
  `}
  }
`;

export const Value = styled.dd`
  display: inline;
  margin: 0px;
`;