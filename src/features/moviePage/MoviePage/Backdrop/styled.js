import styled from "styled-components";

export const Top = styled.div`
  position: relative;
  width: 100vw;
  width: 100%;
  margin: 0px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const StyledWrapper = styled.div`
  width: min(1368px, 100%);
  margin-inline: auto;
  position: relative;
`;

export const ImgBig = styled.img`
  width: 100%;
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
    margin-block-end: 56px;

    @media (width < 1392px) {
      padding-inline-start: 24px;
    }

    @media (width < 1024px){
      margin-block-end: clamp(0.5rem, -0.8636rem + 6.8182vw, 3.5rem);
    }

    @media (width < 767px) {
      padding-inline-start: 16px;
    }
`;

export const Title = styled.h1`
  font-size: 64px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  line-height: 1.2;
  margin: 0px 0px 24px;

  @media (width < 1024px){
    font-size: clamp(1.5rem, 0.3636rem + 5.6818vw, 4rem);
    margin-block-end: clamp(0.25rem, -0.3182rem + 2.8409vw, 1.5rem);
  }
`;