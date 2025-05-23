import { PersonTileList, PersonTile, ImgPerson, NameWrapper, Name, Character } from "./styled"
import { API_imageURL } from "../../../../common/detailsPages/API_imageURL";
import emptyImage from "../../../../common/detailsPages/emptyImage.png";


export const PeopleList = ({ people }) => (
  <PersonTileList>
    {people.map(({ credit_id, profile_path, original_name, character, job }) => {

      if (profile_path === null) { profile_path = emptyImage; }
      else { profile_path = `${API_imageURL}/${profile_path}` };

      if (character === undefined) character = job;

      return (
        <PersonTile key={credit_id}>
          <ImgPerson src={profile_path} alt="" />
          <NameWrapper>
            <Name>{original_name}</Name>
            <Character>{character}</Character>
          </NameWrapper>
        </PersonTile>
      )
    })}
  </PersonTileList>
);