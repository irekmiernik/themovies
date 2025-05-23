import { useSearchParams } from "react-router-dom";
import searchIcon from "../assets/search-icon.png";
import { StyledSearch, StyledSearchIcon, StyledSearchInput } from "./styled"
import { useSelector } from "react-redux";
import { searchQuerySelector } from "../../features/moviesList/moviesSlice";

const SearchForm = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currrentUrl = window.location.href;
    const query = searchParams.get("search");

    const isActorsPage = currrentUrl.includes("actors");

    const onInputChange = ({ target }) => {
        setSearchParams(target.value.trim()
            ? { search: target.value }
            : searchParams.delete("search"));
    }

    return (
        <StyledSearch >
            <StyledSearchIcon src={searchIcon} alt="search" />
            <StyledSearchInput
                type="text"
                placeholder={`Search for ${isActorsPage ? "people" : "movies"}...`}
                value={query ? query : ""}
                onChange={onInputChange}
            />
        </StyledSearch>
    )
}

export default SearchForm;