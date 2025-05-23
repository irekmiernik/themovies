import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1368px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  flex-flow: column;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 288px;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`;