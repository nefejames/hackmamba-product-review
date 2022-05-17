import { Box, VStack, Text } from "@chakra-ui/react";
import Review from "@components/Review";
import { useReviewsContext } from "context/ReviewsContext";

export default function ReviewContainer() {
  const { reviews } = useReviewsContext();

  return (
    <Box mt={10} rounded="md" border="1px" borderColor="gray.200" p={3}>
      <VStack spacing={5} align="flex-start">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <Review review={review} key={review.reviewText} />
          ))
        ) : (
          <Text fontSize="2xl">No reviews yet ❗❗❗</Text>
        )}
      </VStack>
    </Box>
  );
}
