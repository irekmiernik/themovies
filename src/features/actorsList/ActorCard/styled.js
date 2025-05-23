import styled from "styled-components";


export const ActorName = styled.h2`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`;

export const ActorCardContainer = styled.div`
  max-width: 208px;
  max-height: 339px;
  padding: 16px 16px;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  
`;

export const ActorDetailsCointainer = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActorImage = styled.img`
  max-width: 173px;
  max-height: 231px;
  border-radius: 10px;

`;