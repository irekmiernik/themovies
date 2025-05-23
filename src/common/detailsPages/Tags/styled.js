import styled, { css } from "styled-components";

const tagsGap = 16;
const smallTagsGap = 8;
const tagsGapMobile = 8;

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: ${24 - tagsGap}px - ${tagsGap / 2}px 0;
  list-style: none;
  padding: 0px;

  ${({ small }) => small && css`
    margin: 0 - ${smallTagsGap / 2}px;
  `}

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0 - ${tagsGapMobile / 2}px;
  }
`;

export const Item = styled.li`
  padding: 8px 16px;
  margin: ${tagsGap}px ${tagsGap / 2}px 0px;
  font-size: 14px;
  background: ${({ theme }) => theme.colors.mystic};
  border-radius: 5px;

  ${({ small }) => small && css`
    margin: ${smallTagsGap}px ${smallTagsGap / 2}px 0px;
  `}

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 4px 8px;
    font-size: 10px;
    margin: ${tagsGapMobile}px ${tagsGapMobile / 2}px 0px;
  }
`;