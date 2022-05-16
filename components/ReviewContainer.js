import { Box, VStack } from "@chakra-ui/react";
import Review from "@components/Review";
import { useReviewsContext } from "context/ReviewsContext";

export default function ReviewContainer() {
  const { reviews } = useReviewsContext();

  return (
    <Box
      bg="blue.600"
      mt={10}
      rounded="md"
      border="1px"
      borderColor="gray.200"
      p={3}
    >
      <VStack spacing={10} align="flex-start">
        {reviews.length > 0
          ? reviews.map((review) => <Review review={review} key={review} />)
          : null}
      </VStack>
    </Box>
  );
}
