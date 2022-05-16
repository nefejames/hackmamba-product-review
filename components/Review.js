import { Box, Text } from "@chakra-ui/react";

export default function Comment({ review }) {
  return (
    <Box>
      <Text>{review}</Text>
    </Box>
  );
}
