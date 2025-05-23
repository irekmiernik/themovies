import styled from "styled-components"

export const StyledSearch = styled.div`
    height: 48px;
    width: min(100%, 432px);
    margin-inline-start: auto;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 33px;
    padding: 12px 24px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;

    @media (width <= 768px) {
        width: 100%;
    }

    @media (width <= 425px) {
        padding: 16px 14px;
        gap: 8px;
    }
`

export const StyledSearchIcon = styled.img`
    width: min(100%, 24px);

    @media (width <= 768px) {
        width: clamp(1rem, 0.6429rem + 1.7857vw, 1.5rem);
    }
`

export const StyledSearchInput = styled.input`
    border: none;
    color: ${({ theme }) => theme.colors.darkerGrey};
    font-size: 16px;
    line-height: 1;
    font-weight: 400;
    flex-grow: 1;
    outline: none;

    @media (width <= 1024px) {
        font-size: clamp(0.8125rem, 0.7273rem + 0.4261vw, 1rem);
    }
`