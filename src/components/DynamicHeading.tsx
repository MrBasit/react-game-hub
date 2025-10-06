import { Heading } from "@chakra-ui/react";
import useGeners from "../hooks/useGeners";
import usePlatform from "../hooks/usePlatform";
import queryStore from "../stores/queryStore";

export default function DynamicHeading() {
  let queryGenerId = queryStore((s) => s.GenreId);
  let queryPlatformId = queryStore((s) => s.PlatformId);
  let { data: genres } = useGeners();
  let { data: platforms } = usePlatform();
  let genre = genres.results.find((r) => r.id == queryGenerId);
  let platform = platforms.results.find((r) => r.id == queryPlatformId);
  return (
    <Heading size={{ base: "3xl", lg: "5xl" }} marginY={"16px"}>
      {platform?.name || ""} {genre?.name || ""} Games
    </Heading>
  );
}
