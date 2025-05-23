import styled from "styled-components";

export const PeopleWrapper = styled.div`
  width: 100%;
  margin: 40px auto 0px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 288px;
    margin: 6px auto 0px;
  }
`;

export const SubHeader = styled.h2`
  max-width: 100%;
  margin: 0px 0px 32px 0px;
  padding-left: 16px;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 100%;
    margin-bottom: 12px;
    padding-left: 8px;
    font-size: 20px;
  }  
`;
