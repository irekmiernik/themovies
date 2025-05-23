import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from "./star.svg";

export const Wrapper = styled.div`
  margin: 24px 0px 0px 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 14px;

  ${({ small }) => small && css`
    margin: 16px 0px 0px 0px;
    margin-top: 12px;
    align-self: end;
  `}

  ${({ backdrop }) => backdrop && css`
    color: ${({ theme }) => theme.colors.white};
    margin-left: 276px;
  `}  
`;

export const Star = styled(StarIcon)`
  height: 22px;
  width: auto;
  transform: translate(-8%);

  ${({ backdrop }) => backdrop && css`
    height: 35px;
  `}
  
  //no vote vertically
  ${({ hidden }) => hidden && css`
    width: 0px;
    display: unset;
  `}  
`;

export const Average = styled.strong`
  font-size: 22px;
  font-weight: 500;
  margin-left: 8px;

  ${({ small }) => small && css`
    font-size: 16px;
  `}

  ${({ backdrop }) => backdrop && css`
    font-size: 30px;
  `}  
`;

export const OutOf = styled.span`
  margin-left: 8px;
`;

export const Count = styled.p`
  margin-left:8px;

  ${({ $noVotes }) => $noVotes && css`
    margin-left: 0px;
  `}

  ${({ small }) => small && css`
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
  `}

  ${({ backdrop }) => backdrop && css`
    width: 100%;
    margin-left: 0px;
    margin-top: 16px;
  `}  
`;