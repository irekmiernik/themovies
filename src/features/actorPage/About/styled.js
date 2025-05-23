import styled from "styled-components";

export const AboutWrapper = styled.div`
  height: auto;
  max-width: 100vw;
  margin: 56px auto 40px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  display: grid;
  grid-template-areas:
    "picture data"
    "picture description";
  grid-template-columns: 399px 1fr;
  grid-template-rows: auto 1fr;
  align-content: start;
  grid-gap: 0 40px;
  border-radius: 5px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 288px;
    margin: 24px auto;
    grid-template-columns: 116px 1fr;
    grid-template-rows: 163px 1fr;
    grid-template-areas:
      "picture data"
      "description description";
    padding: 16px;
    grid-gap: 0px 16px;
  }
`;

export const PersonalInfo = styled.div`
  max-height: auto;
  max-width: 60vw;
  display: flex;
  flex-flow: column;
  align-items: left;
  margin: 0px;
  grid-area: data;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 125px;
  }
`;

export const Img = styled.div`
  padding-top: calc(100%  * 632 / 421);
  background: url("${({ $url }) => $url}");
  background-size: 399px 564px;
  background-position: top;
  background-repeat: no-repeat;
  border-radius: 5px;
  grid-area: picture;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    background-size: 116px 163px;
  }
`;

export const Name = styled.p`
  max-width: 55vw;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.6;
  margin: 8px 0px 0px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 125px;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.2;
    margin: 4px 0px 0px 0px;
  }  
`;

export const BirthdayWrapper = styled.div`
  max-width: 55vw;
  margin: 16px 0px 0px 0px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 125px;
    margin: 8px 0px 0px 0px;
  }
`;

export const TextInfo = styled.span`
  margin: 0px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 400;
    font-size: 12px;
  }
`;

export const HeaderInfo = styled.p`
  margin: 8px 0px 0px 0px;
  color: ${({ theme }) => theme.colors.darkerGrey};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 400;
    font-size: 12px;
  }
`;

export const InfoWrapper = styled.p`
  max-width: 55vw;
  margin: 24px 0 0 0;
  text-align: justify; 
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  grid-area: description;
  overflow-wrap: anywhere;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 256px;
    font-size: 14px;
  }
`;