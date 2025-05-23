import { PeopleWrapper, SubHeader } from "./styled";
import { PeopleList } from "./PeopleList";

export const People = ({ type, people }) => {

  return (
    <PeopleWrapper>
      <SubHeader>{`${type}(${people.length})`}</SubHeader>
      <PeopleList people={people} />
    </PeopleWrapper>
  )
};