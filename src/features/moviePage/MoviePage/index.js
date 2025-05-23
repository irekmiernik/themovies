import { useSelector } from "react-redux";
import { selectors } from "../moviePageSlice";
import { API_imageURL } from "../../../common/detailsPages/API_imageURL";
import emptyImage from "../../../common/detailsPages/emptyImage.png";
import { PageContainer } from "../../../common/detailsPages/DetailsPages/styled";
import { Backdrop } from "./Backdrop";
import { Tile } from "../Tile";
import { People } from "../People";


const imageFromAPI = data => {
  if (data.length > 0) return `${API_imageURL}/${data[0].file_path}`;
  return emptyImage;
};

export const MoviePage = () => {

  const { images, credits, ...base } = useSelector(selectors.selectDetails);

  const poster = imageFromAPI(images.posters);

  const description = base.overview;
  const title = base.title;
  const year = new Date(base.release_date).getFullYear();

  const movieMetaData = {
    "Production": base.production_countries?.map(({ name }) => name).join(",  "),
    "Release data": new Date(base.release_date).toLocaleDateString(),
  };

  const cast = credits.cast;
  const crew = credits.crew;

  return (
    <>
      <Backdrop />
      <PageContainer>
        <Tile
          poster={poster}
          title={title}
          year={year}
          metaData={movieMetaData}
          hideMetaDataKeysOnMobile
          tags={base.genres?.map(({ name }) => name)}
          vote={{
            average: base.vote_average,
            count: base.vote_count,
          }}
          description={description}
        />
        <People type="Cast" people={cast} />
        <People type="Crew" people={crew} />
      </PageContainer>
    </>
  )
};