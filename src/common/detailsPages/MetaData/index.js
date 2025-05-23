import { Key, Row, Value, Wrapper } from "./styled";

export const MetaData = ({ metaData = {}, hideKeysOnMobile }) => {
  const filleMetaData = Object.entries(metaData).filter(([_, value]) => value);

  return (
    !!filleMetaData?.length && (
      <Wrapper>
        {filleMetaData.map(([key, value]) => (
          <Row key={key}>
            <Key $hideOnMobile={hideKeysOnMobile}>{key}:</Key>
            <Value>{value}</Value>
          </Row>
        ))}
      </Wrapper>
    )
  )
};