import { Heading } from "@chakra-ui/react";
import type { QueryObject } from "./App";
import useGeners from "../hooks/useGeners";
import { Query } from "@tanstack/react-query";
import usePlatform from "../hooks/usePlatform";

interface Props {
  query: QueryObject;
}

export default function DynamicHeading({ query }: Props) {
  let { data: genres } = useGeners();
  let { data: platforms } = usePlatform();
  let genre = genres.results.find((r) => r.id == query.GenreId);
  let platform = platforms.results.find((r) => r.id == query.PlatformId);
  return (
    <Heading size={{ base: "3xl", lg: "5xl" }} marginY={"16px"}>
      {platform?.name || ""} {genre?.name || ""} Games
    </Heading>
  );
}
