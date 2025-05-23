import styled from "styled-components";

export const PersonTileList = styled.div`
  margin: 0px;
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 24px 24px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 16px 16px;
  }
`;

export const PersonTile = styled.div`
  flex: 0 0 208px;
  background: ${({ theme }) => theme.colors.white};
  padding: 16px 16px 0px 16px;
  border-radius: 5px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex: 0 0 136px;
    padding: 8px 8px 0px 8px;
  }
`;

export const ImgPerson = styled.img`
  width: 176px;
  height: 231px;
  border-radius: 5px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 120px;
    height: 178px;
    border-radius: 5px;
  }
`;

export const NameWrapper = styled.div`
  max-width: 176px;
  max-height: 100%;
  margin: 12px auto 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 120px;
    max-height: 100%;
    margin: 8px;
    display: flex;
    lex-direction: column;
    justify-content: space-between;
  }
`;


export const Name = styled.p`
  font-weight: 500;
  font-size: 22px;
  margin: 0px;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const Character = styled.p`
  margin: 8px 0px 0px 0px;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkerGrey};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;