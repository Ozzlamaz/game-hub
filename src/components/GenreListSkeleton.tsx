import { HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack>
      <SkeletonCircle />
      <SkeletonText width="50%" noOfLines={1} />
    </HStack>
  );
};
export default GenreListSkeleton;
