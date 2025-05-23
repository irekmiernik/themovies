import styled from "styled-components";
import { ReactComponent as StarIcon } from "./star.svg";

export const Wrapper = styled.div`
  margin: 0px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  gap: 17px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};

  @media (width < 768px){
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const RateWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: flex-start;
  gap: 8px;

  @media (768px < width){
    flex-wrap: wrap;
  }
`

export const CounterWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    margin-block-end: 3px;

    @media (width < 425px){
      margin-block-end: 1px;
    }
`

export const Star = styled(StarIcon)`
  height: auto;
  width: 40px;
 
    @media (width < 1024px){
      width: clamp(1rem, 0.3182rem + 3.4091vw, 2.5rem);
    }
`;

export const Average = styled.strong`
  font-size: 30px;
  font-weight: 500;
  line-height: 1;
  margin: 0;
  
  @media (width < 1024px){
    font-size: clamp(0.875rem, 0.4205rem + 2.2727vw, 1.875rem);
  }
`;

export const OutOf = styled.span`
  margin-inline-start: 8px;
  line-height: 1;
  font-size: 16px;

    @media (width < 1024px){
      font-size: clamp(0.625rem, 0.4545rem + 0.8523vw, 1rem);
    }
`;

export const Count = styled.p`
  margin: 0;
  margin-block-end: 3px;
  font-size: 16px;

  @media (width < 1024px){
    font-size: clamp(0.625rem, 0.4545rem + 0.8523vw, 1rem);
  }

  @media (768px < width){
    flex: 1 1 100%;
    margin-block-start: 8px;
  }

  @media (width < 425px){
    margin-block-end: 1px;
  }
`;