import styled from "styled-components";

const tagsGap = 16;
const tagsGapMobile = 8;

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: ${24 - tagsGap}px - ${tagsGap / 2}px 0;
  list-style: none;
  padding: 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: ${tagsGapMobile}px auto 0px 0px;
  }
`;

export const Item = styled.li`
  padding: 8px 16px;
  margin: ${tagsGap}px ${tagsGap / 2}px 0px;
  font-size: 14px;
  background: ${({ theme }) => theme.colors.mystic};
  border-radius: 5px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 4px;
    font-weight: 400;
    font-size: 10px;
    margin: 0px ${tagsGapMobile}px ${tagsGapMobile}px 0px;
  }
`;