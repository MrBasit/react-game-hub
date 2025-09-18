import { Badge } from "@chakra-ui/react";

interface Prop {
  score: number;
}
export default function GameScore({ score }: Prop) {
  const color = score > 90 ? "green" : score > 85 ? "yellow" : "red";
  return (
    <div>
      <Badge fontSize={"16px"} paddingX={2} colorPalette={color}>
        {score}
      </Badge>
    </div>
  );
}
