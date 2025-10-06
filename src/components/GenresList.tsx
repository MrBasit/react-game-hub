import { Image, Link, List, Spinner } from "@chakra-ui/react";
import useGeners from "../hooks/useGeners";
import { GetOptimizedImageUrl } from "../services/optimized-images.service";
import queryStore from "../stores/queryStore";

export default function GenresList() {
  let { data, error, isLoading } = useGeners();
  let updateQueryGenre = queryStore((s) => s.updateGenre);
  let queryGenreId = queryStore((s) => s.GenreId);
  return (
    <>
      {error && null}

      {isLoading && <Spinner></Spinner>}

      <List.Root gap="2" variant="plain" align="center">
        {data?.results.map((genre) => {
          return (
            <List.Item
              key={genre.id}
              onClick={() => updateQueryGenre(genre.id)}
            >
              <Image
                src={GetOptimizedImageUrl(genre.image_background)}
                width={"50px"}
                height={"50px"}
                borderRadius={"10px"}
                marginRight={"8px"}
              ></Image>
              <Link
                fontWeight={genre.id == queryGenreId ? "bolder" : "normal"}
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
