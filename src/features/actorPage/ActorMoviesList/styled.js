import styled from "styled-components";

export const MoviesListWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  padding: 0px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 24px;
  }
`;

export const SubHeader = styled.h2`
  max-width: 100%;
  margin: 24px 0px 24px;
  padding-left: 16px;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  text-align: left;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 100%;
    margin: 0px;
    padding-left: 8px;
    font-size: 20px;
  }  
`;