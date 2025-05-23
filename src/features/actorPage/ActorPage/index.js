import { useSelector } from "react-redux";
import { selectors } from "../actorPageSlice";
import { API_imageURL } from "../../../common/detailsPages/API_imageURL";
import emptyImage from "../../../common/detailsPages/emptyImage.png";
import { PageContainer } from "../../../common/detailsPages/DetailsPages/styled";
import { About } from "../About";
import { ActorMoviesList } from "../ActorMoviesList";


const imageFromAPI = data => {
  if (data.length > 0) return `${API_imageURL}/${data[0].file_path}`;
  return emptyImage;
};

export const ActorPage = () => {

  const { images, movie_credits, ...base } = useSelector(selectors.selectDetails);

  const image = imageFromAPI(images.profiles);

  const { biography, birthday, deathday, name, place_of_birth } = base;

  const moviesCast = movie_credits.cast;
  const moviesCrew = movie_credits.crew;

  const day_of_birth = (birthday !== null) ? new Date(birthday).toLocaleDateString() : null;
  const day_of_death = (deathday !== null) ? new Date(deathday).toLocaleDateString() : null;

  return (
    <PageContainer>
      <About
        image={image}
        name={name}
        biography={biography}
        day_of_birth={day_of_birth}
        day_of_death={day_of_death}
        place_of_birth={place_of_birth}
      />
      <ActorMoviesList title="Movies - cast" movies={moviesCast} />
      <ActorMoviesList title="Movies - crew" movies={moviesCrew} />
    </PageContainer>
  );
};
