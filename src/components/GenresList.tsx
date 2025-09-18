import { Image, List, Spinner, Text } from "@chakra-ui/react";
import useGeners from "../hooks/useGeners";
import { GetOptimizedImageUrl } from "../services/optimized-images.service";

export default function GenresList() {
  let { data, isLoading } = useGeners();
  return (
    <>
      {isLoading && <Spinner></Spinner>}

      <List.Root gap="2" variant="plain" align="center">
        {data.map((d) => {
          return (
            <List.Item key={d.id}>
              <Image
                src={GetOptimizedImageUrl(d.image_background)}
                width={"50px"}
                height={"50px"}
                borderRadius={"10px"}
                marginRight={"8px"}
              ></Image>
              <Text fontSize={"20px"}>{d.name}</Text>
            </List.Item>
          );
        })}
      </List.Root>
    </>
  );
}
