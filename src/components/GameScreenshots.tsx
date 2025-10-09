import { SimpleGrid } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshot";
interface Prop {
  slug: string;
}
const GameScreenshots = ({ slug }: Prop) => {
  let { data, isLoading, error } = useGameScreenshots(slug);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <>
      <SimpleGrid marginY={2} columns={2} gap={2}>
        {data?.results.map((i) => (
          <img src={i.image}></img>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
