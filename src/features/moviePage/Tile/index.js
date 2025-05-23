import {
  MovieTile,
  Poster,
  MovieData,
  MovieTitle,
  MovieYear,
  MovieDescription,
} from "./styled";
import { MetaData } from "../../../common/detailsPages/MetaData";
import { TileTags } from "./TileTags";
import { TileVote } from "./TileVote";

export const Tile = ({ poster,
  description, title, year, metaData,
  hideMetaDataKeysOnMobile, tags, vote }) => (

  <MovieTile>
    <Poster $url={poster} />
    <MovieData>
      <MovieTitle>{title}</MovieTitle>
      <MovieYear>{year}</MovieYear>
      <MetaData metaData={metaData} hideKeysOnMobile={hideMetaDataKeysOnMobile} />
      <TileTags tags={tags} />
      <TileVote vote={vote} />
    </MovieData>
    <MovieDescription>{description}</MovieDescription>
  </MovieTile>
);