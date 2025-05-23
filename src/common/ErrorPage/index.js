import { PageContainer } from "../styled/page-container";
import warning from "../assets/warning.png"
import { ErrorPageTitle, StyledButton, StyledErrorPage, StyledParagraph, StyledWarningImg } from "./styled";
import {
    // Navigate,
    useNavigate
} from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <PageContainer>
            <StyledErrorPage>
                <StyledWarningImg src={warning} alt="warning" />
                <ErrorPageTitle title="Ooops! Something went wrong... " />
                <StyledParagraph>Please check your network connection and try again</StyledParagraph>
                <StyledButton onClick={handleClick}>Back to home page</StyledButton>
            </StyledErrorPage>
        </PageContainer>
    )
}
export default ErrorPage;
