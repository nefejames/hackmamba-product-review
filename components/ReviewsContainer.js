import { Box, VStack, Text } from "@chakra-ui/react";
import Review from "@components/Review";
import { useReviewsContext } from "context/ReviewsContext";

export default function ReviewsContainer() {
  const { reviews } = useReviewsContext();

  return (
    <Box mt={10} rounded="md" border="1px" borderColor="gray.200" p={3}>
      <VStack spacing={5} align="flex-start">
        {reviews.map((review) => (
          <Review review={review} key={review.reviewText} />
        ))}
      </VStack>
    </Box>
  );
}
