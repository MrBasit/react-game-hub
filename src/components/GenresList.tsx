import { Image, List, Spinner, Text } from "@chakra-ui/react";
import useGeners, { type Genre } from "../hooks/useGeners";
import { GetOptimizedImageUrl } from "../services/optimized-images.service";

interface Prop {
  onGenreClick: (genre: Genre) => void;
}
export default function GenresList({ onGenreClick }: Prop) {
  let { data, isLoading } = useGeners();
  return (
    <>
      {isLoading && <Spinner></Spinner>}

      <List.Root gap="2" variant="plain" align="center">
        {data.map((genre) => {
          return (
            <List.Item key={genre.id} onClick={() => onGenreClick(genre)}>
              <Image
                src={GetOptimizedImageUrl(genre.image_background)}
                width={"50px"}
                height={"50px"}
                borderRadius={"10px"}
                marginRight={"8px"}
              ></Image>
              <Text fontSize={"20px"}>{genre.name}</Text>
            </List.Item>
          );
        })}
      </List.Root>
    </>
  );
}
