import styled from "styled-components";

export const MovieTile = styled.article`
  max-width: 100vw;
  margin: 64px auto 24px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  display: grid;
  grid-template-areas:
    "picture data"
    "picture description";
  grid-template-columns: 312px 1fr;
  grid-template-rows: auto 1fr;
  align-content: start;
  grid-gap: 24px 24px;
  border-radius: 5px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 288px;
    margin: 16px auto 15px;
    padding: 16px;
    grid-template-columns: 114px 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "picture data"
      "description description";
    grid-gap: 16px 16px;
  }
`;

export const MovieData = styled.div`
  max-width: 65vw;
  display: flex;
  flex-flow: column;
  align-items: left;
  margin: 0px;
  grid-area: data;
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 126px;
  }
`;

export const Poster = styled.div`
  padding-top: calc(100%  * 632 / 421);
  background: url("${({ $url }) => $url}");
  background-size: 312px 464px;
  background-position: top;
  background-repeat: no-repeat;
  border-radius: 5px;
  grid-area: picture;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    background-size: 114px 169px;
  }
`;

export const MovieTitle = styled.h1`
  max-width: 65vw;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 8px 0px 0px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 126px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.3;
    margin: 0px;
  }
`;

export const MovieYear = styled.p`
  max-width: 65vw;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.2;
  margin: 24px 0 0 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 126px;
    font-weight: 400;
    font-size: 13px;
    line-height: 1.3;
    margin: 4px 0px 0px 0px;
  }
`;

export const MovieDescription = styled.p`
  max-width: 65vw;
  margin: 0px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  grid-area: description;
  text-align: justify;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 256px;
    font-size: 14px;
  }
`;