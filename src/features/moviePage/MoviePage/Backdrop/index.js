import { useSelector } from "react-redux";
import { selectors } from "../../moviePageSlice";
import { API_imageURL } from "../../../../common/detailsPages/API_imageURL";
import { ImgBig, Vignette, Title, TitleWrapper, Wrapper } from "./styled";
import { BackdropVote } from "./BackdropVote";

export const Backdrop = () => {

  const { images, ...base } = useSelector(selectors.selectDetails);

  return !!(images.backdrops.length > 0) && (
    <Wrapper>
      <ImgBig src={`${API_imageURL}/${images.backdrops[0].file_path}`} alt="" />
      <Vignette >
        <TitleWrapper>
          <Title>{base.title}</Title>
          <BackdropVote
            vote={{
              average: base.vote_average,
              count: base.vote_count,
            }}
          />
        </TitleWrapper>
      </Vignette>
    </Wrapper>
  );
};