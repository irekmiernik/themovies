import { Item, Wrapper } from "./styled";

export const TileTags = ({ tags }) => (
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