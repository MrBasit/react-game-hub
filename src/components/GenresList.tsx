import { Image, Link, List, Spinner } from "@chakra-ui/react";
import useGeners, { type Genre } from "../hooks/useGeners";
import { GetOptimizedImageUrl } from "../services/optimized-images.service";
import type { QueryObject } from "./App";

interface Prop {
  onGenreClick: (genre: Genre) => void;
  query: QueryObject | null;
}
export default function GenresList({ onGenreClick, query }: Prop) {
  let { data, error, isLoading } = useGeners();
  return (
    <>
      {error && null}

      {isLoading && <Spinner></Spinner>}

      <List.Root gap="2" variant="plain" align="center">
        {data?.results.map((genre) => {
          return (
            <List.Item key={genre.id} onClick={() => onGenreClick(genre)}>
              <Image
                src={GetOptimizedImageUrl(genre.image_background)}
                width={"50px"}
                height={"50px"}
                borderRadius={"10px"}
                marginRight={"8px"}
              ></Image>
              <Link
                fontWeight={genre.id == query?.GenreId ? "bolder" : "normal"}
                padding={"4px"}
                variant="plain"
                fontSize={"20px"}
              >
                {genre.name}
              </Link>
            </List.Item>
          );
        })}
      </List.Root>
    </>
  );
}
