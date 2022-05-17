import { Box, Text, Image } from "@chakra-ui/react";

export default function Review({ review }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      bg="blue.600"
      w="full"
      rounded="md"
      p={2}
    >
      <Text fontSize="2xl" mr={6}>
        {review.reviewText}
      </Text>
      <Image
        boxSize="80px"
        objectFit="cover"
        borderRadius="full"
        src={review.reviewImage}
        alt={review.reviewImage}
      />
    </Box>
  );
}
