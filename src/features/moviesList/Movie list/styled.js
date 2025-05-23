import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1368px;
  margin: 0 auto;
  @media (max-width: 450px) {
    max-width: 288px;  }
`;

export const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 10px;
  margin-top: 20px;
  max-width: 1368px;
 

  justify-content: center;
  align-items: center;

  @media (max-width: 1375px) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
  @media (max-width: 1065px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    ;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  
  color: ${({ theme }) => theme.colors.black};
`;