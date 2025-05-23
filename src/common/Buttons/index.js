import { currentPageSelector, setFirstPage, setLastPage, setNextPage, setPreviousPage, totalPagesSelector } from "../../features/moviesList/moviesSlice";
import { StyledButton, ButtonsContainer, GraySpan, BlueSpan } from "./styled"
import { useDispatch, useSelector } from "react-redux";

export const Buttons = () => {
  const page = useSelector(currentPageSelector);
  const totalPages = useSelector(totalPagesSelector);
  const dispatch = useDispatch();

  const isMobile = window.innerWidth <= 500;

  if (isMobile) {
    return (
      <ButtonsContainer>
        <StyledButton $reverse onClick={() => dispatch(setFirstPage())} disabled={page === 1}><GraySpan>{"<<"}</GraySpan></StyledButton>
        <StyledButton $reverse onClick={() => dispatch(setPreviousPage())} disabled={page === 1}><GraySpan>{`<`}</GraySpan></StyledButton>
        <GraySpan>Page</GraySpan> {page} <GraySpan>of</GraySpan> {totalPages}
        <StyledButton $next onClick={() => dispatch(setNextPage())} disabled={page === totalPages}><BlueSpan>{`>`}</BlueSpan></StyledButton>
        <StyledButton $next onClick={() => dispatch(setLastPage())} disabled={page === totalPages}><BlueSpan>{`>>`}</BlueSpan></StyledButton>
      </ButtonsContainer>
    );
  }

  return (

    <ButtonsContainer>
      <StyledButton $reverse onClick={() => dispatch(setFirstPage())} disabled={page === 1}><GraySpan>{`<`}</GraySpan> First</StyledButton>
      <StyledButton $reverse onClick={() => dispatch(setPreviousPage())} disabled={page === 1}><GraySpan>{`<`}</GraySpan> Previous</StyledButton>
      <GraySpan>Page</GraySpan> {page} <GraySpan>of</GraySpan> {totalPages}
      <StyledButton $next onClick={() => dispatch(setNextPage())} disabled={page === totalPages}> Next <BlueSpan>{`>`}</BlueSpan></StyledButton>
      <StyledButton $next onClick={() => dispatch(setLastPage())} disabled={page === totalPages}> Last <BlueSpan>{`>`}</BlueSpan></StyledButton>
    </ButtonsContainer>
  )
}