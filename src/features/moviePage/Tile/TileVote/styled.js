import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from "./star.svg";

export const Wrapper = styled.div`
  margin: 24px 0px 0px 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 14px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0px;
    max-height: 20px;
    font-size: 13px;
  }
`;

export const Star = styled(StarIcon)`
  height: 22px;
  width: auto;
  transform: translate(-8%);
  
  //no vote vertically
  ${({ hidden }) => hidden && css`
    width: 0px;
    display: unset;
  `}
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 16px;
  }
`;

export const Average = styled.strong`
  font-size: 22px;
  font-weight: 500;
  margin-left: 8px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 600;
    font-size: 13px;
    margin-left: 4px;
  }
`;

export const OutOf = styled.span`
  margin-left: 8px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
    height: 0px;
  }
`;

export const Count = styled.p`
  margin-left: 8px;

  ${({ $noVotes }) => $noVotes && css`
    margin-left: 0px;
  `}

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 400;
    font-size: 13px;
    margin-left: 4px;
    color: ${({ theme }) => theme.colors.darkerGrey};
  }
`;