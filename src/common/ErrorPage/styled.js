import styled from "styled-components";
import { PageTitle } from "../PageHeader";

export const StyledErrorPage = styled.div`
    width:  min(100%, 592px);
    margin-inline: auto;
    margin-block-start: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    text-align: center;
`;

export const StyledWarningImg = styled.img`
    width: 120px;
    height: auto;
    margin: 0;
    padding: 0;
`;

export const ErrorPageTitle = styled(PageTitle)`
        margin: 0;

        @media (width <= 1024px) {
        font-size: clamp(1.375rem, 0.9773rem + 1.9886vw, 2.25rem);
        }
`;

export const StyledParagraph = styled.p`
    color: ${({ theme }) => theme.colors.black};
    font-size: 22px;
    font-weight: 500;
    line-height: 1.4;
    text-align: center;
    width: min(100%, 32ch);
    margin: 0;

    @media (width <= 1024px) {
        font-size: clamp(1.125rem, 1.0114rem + 0.5682vw, 1.375rem);
    }
`;

export const StyledButton = styled.button`
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    border: 1px solid ${({ theme }) => theme.colors.blue};
    border-radius: 5px;
    padding: 16px 24px;
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    cursor: pointer;
    transition: background 0.55s ease-in-out, color 0.55s ease-in-out;

    &:hover {
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.blue};
    }
`;