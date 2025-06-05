import styled from "styled-components";
import { ReactComponent as StarIcon } from "./star.svg";

export const Wrapper = styled.div`
  margin: 24px 0px 0px 0px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};

  @media(max-width: ${({ theme }) => theme.breakpoints.laptopMax}px) {
    margin-top: 20px; 
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin-top: 16px;
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-top: 12px;  
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 8px;  
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    margin-top: 4px;  
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  margin-left: clamp(4px, 1vw, 8px);;
`

export const Star = styled(StarIcon)`
  height: auto;
  width: clamp(16px, 4vw, 40px);
`;

export const Average = styled.strong`
  font-size: 30px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0;
  
  @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    font-size: 20px;
    
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 600;
    font-size: 14px;
  }
`;

export const OutOf = styled.span`
  margin-left: clamp(2px, 0.5vw, 7px);
  line-height: 1.2;
  font-size: clamp(10px, 2vw, 16px);
  font-weight: 400;
`;

export const Count = styled.p`
  flex: 1 1 100%;
  margin: 8px 0 0 0;
  line-height: 1.2;
  font-size: clamp(10px, 2vw, 16px);
  font-weight: 400;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-basis: auto;
    margin: 0 0 0 8px;
  }
`;