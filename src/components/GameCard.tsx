import { Button, Card, Center, Image, Text } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";

interface Prop {
  game: Game;
}

export default function GameCard({ game }: Prop) {
  return (
    <Card.Root maxW="sm" overflow="hidden" marginX={{ sm: "auto" }}>
      <Image src={game.background_image} />
      <Card.Body gap="2">
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
      <Card.Footer gap="2">
        <PlatformIcons platforms={game.parent_platforms}></PlatformIcons>
      </Card.Footer>
    </Card.Root>
  );
}
