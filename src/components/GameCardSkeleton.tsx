import {
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

export default function GameCardSkeleton() {
  return (
    <Stack gap="6" borderRadius={2}>
      <Skeleton height="350px" />
      <SkeletonText noOfLines={2} />
    </Stack>
  );
}
