import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";

export default function ProductCard() {
  return (
    <Box
      width="400px"
      h="300px"
      border="1px"
      borderColor="gray.200"
      rounded="md"
      boxShadow="base"
    >
      <Box position="relative" w="full" h="70%">
        <Image
          src="/product.webp"
          alt="an img"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Box display="flex" alignItems="center" h="90px" pl={6}>
        <Heading as="h3" fontSize={["16px", "24px"]}>
          My Product
        </Heading>
      </Box>
    </Box>
  );
}
