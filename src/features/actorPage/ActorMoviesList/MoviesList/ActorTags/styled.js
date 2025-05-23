import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0px auto 10px 0px;
  padding: 0px;
  list-style: none;
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0px auto 8px 0px;
  }
`;

export const Item = styled.li`
  padding: 8px 16px;
  font-size: 14px;
  background: ${({ theme }) => theme.colors.mystic};
  border-radius: 5px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 4px;
    font-weight: 400;
    font-size: 10px;
  }
`;