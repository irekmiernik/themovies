import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const ImgBig = styled.img`
  width: 100%;
  max-height: 770px;
`;

export const Vignette = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  flex-wrap: wrap;
  background:
   linear-gradient(00deg, black, transparent 40%, transparent 60%, black),
   linear-gradient(90deg, black, transparent 30%, transparent 70%, black);
`;

export const TitleWrapper = styled.div`
  margin-bottom: 56px;
  margin-left: 276px;

  @media(max-width: ${({ theme }) => theme.breakpoints.laptopMax}px) {
    margin-bottom: 48px;
    margin-left: 192px;
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin-bottom: 32px;
    margin-left: 128px;
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-bottom: 24px;
    margin-left: 96px;
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 16px;
    margin-left: 48px;
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    margin-bottom: 8px;
    margin-left: 16px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 64px;
  line-height: 1.2;
  margin: 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.laptopMax}px) {
    font-size: 56px;
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    font-size: 48px;
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 32px;
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 24px;
  }
`;