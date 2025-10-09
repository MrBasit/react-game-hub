import { useParams } from "react-router";
import useGame from "../hooks/useGame";
import {
  Box,
  Heading,
  HStack,
  SimpleGrid,
  Spinner,
  Tag,
  Text,
} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameScore from "../components/GameScore";
import GameInfo from "../components/GameInfo";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";

let GameDetailPage = () => {
  let { slug } = useParams();
  let { data: Game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner size="xl"></Spinner>;

  if (error) throw error;

  return (
    <SimpleGrid padding={5} columns={{ base: 1, lg: 2 }}>
      <Box>
        <Heading size={"4xl"}>{Game?.name}</Heading>
        <ExpandableText>{Game?.description_raw!}</ExpandableText>
        <SimpleGrid columns={2}>
          <GameInfo term="Platforms">
            {Game?.parent_platforms.map((p) => (
              <Text key={p.platform.id} as="dd">
                {p.platform.name}
              </Text>
            ))}
          </GameInfo>

          <GameInfo term="Score">
            <GameScore score={Game?.metacritic || 0}></GameScore>
          </GameInfo>

          <GameInfo term="Genre">
            {Game?.genres.map((g) => (
              <Text key={g.id} as="dd">
                {g.name}
              </Text>
            ))}
          </GameInfo>

          <GameInfo term="Tags">
            <HStack wrap={"wrap"}>
              {Game?.tags.map((t) => (
                <Tag.Root key={t.id}>
                  <Tag.Label as="dd">{t.name}</Tag.Label>
                </Tag.Root>
              ))}
            </HStack>
          </GameInfo>
        </SimpleGrid>
      </Box>
      <Box>
        <GameTrailer slug={Game?.slug!}></GameTrailer>
        <GameScreenshots slug={Game?.slug!}></GameScreenshots>
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailPage;
