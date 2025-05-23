import { Item, Wrapper } from "./styled";

export const ActorTags = ({ tags }) => (
  !!tags?.length && (
    <Wrapper>
      {tags.map(tag => (
        <Item key={tag}>
          {tag}
        </Item>
      ))}
    </Wrapper>
  )
)