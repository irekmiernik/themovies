import { createDetailsSlice } from "../../common/detailsPages/detalisSlice";

export const moviePageSlice = createDetailsSlice({
  name: "movieDetails",
});

export const { actions, selectors } = moviePageSlice;

export default moviePageSlice.reducer;