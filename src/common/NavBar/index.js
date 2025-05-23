import {
    StyledLogoIcon, StyledLogoName, StyledLogoNavLink,
    // StyledLogoWrapper,
    StyledMenu, StyledMenuItem, StyledNavBar, StyledNavLink, StyledSearch, StyledSearchIcon, StyledSearchInput
} from "./styled";
import logo from "../assets/video-logo.png";

import { NavLink } from "react-router-dom";
import SearchForm from "../SearchForm";

const NavBar = () => (
    <StyledNavBar>
        <StyledLogoNavLink to={"/"}>
            <StyledLogoIcon src={logo} alt="logo" />
            <StyledLogoName>Movies&nbsp;Browser</StyledLogoName>
        </StyledLogoNavLink>

        <StyledMenu>
            <StyledMenuItem>
                <StyledNavLink to={"/"}>
                    Movies
                </StyledNavLink>
            </StyledMenuItem>
            <StyledMenuItem>
                <StyledNavLink to={"/actors"}>
                    People
                </StyledNavLink>
            </StyledMenuItem>
        </StyledMenu>
        <SearchForm />
    </StyledNavBar>
);

export default NavBar;