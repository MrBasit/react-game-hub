import { Heading } from "@chakra-ui/react";
import type { QueryObject } from "./App";

interface Props {
  query: QueryObject;
}

export default function DynamicHeading({ query }: Props) {
  return (
    <Heading size={{ base: "3xl", lg: "5xl" }} marginY={"16px"}>
      {query.Platform?.name || ""} {query.Genre?.name || ""} Games
    </Heading>
  );
}
