import styled from "styled-components";

export const MoviesTileList = styled.div`
  margin: 0px auto;
  padding: 0;
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 24px 24px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 12px 12px;
  }
`;

export const MovieTile = styled.div`
  max-width: 324px;
  padding: 16px;
  margin: 0px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  display: flex;
  flex-flow: column;
  position: relative;
    
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 288px;
    padding: 16px;
    margin: 16px 0px 0px 0px;
    flex-flow: row;
  }
`;

export const ImgMovie = styled.img`
  width: 292px;
  height: 434px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px;
    height: 169px;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-flow: column;
  align-items: left;
  margin: 16px 0px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 126px;
    margin: 0px 16px;
  }
`;

export const MovieTitle = styled.p`
  margin: 0px auto 8px 0px;
  max-width: 280px;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 126px;
    font-size: 16px;
    margin: 0px auto 4px 0px;
  }
`;

export const MovieYear = styled.p`
  margin: 0px auto 8px 0px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.darkerGrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 126px;
    font-size: 13px;
    line-height: 1.3;
  }
`;