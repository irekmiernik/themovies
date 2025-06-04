import { Wrapper, Star, Average, OutOf, Count, CounterWrapper } from "./styled";

export const BackdropVote = ({ vote }) => (
  !!vote && (
    <Wrapper>
      <Star />
      {!!vote?.average && (
        <CounterWrapper>
          <Average>{vote.average.toFixed(1)}</Average>
          <OutOf>/ 10</OutOf>
        </CounterWrapper>
      )}
      <Count $noVotes={!vote?.count}>
        {vote?.count
          ? `${vote.count} ${vote.count === 1 ? "vote" : "votes"}`
          : "no votes yet"
        }
      </Count>
    </Wrapper>
  )
);