import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import ReviewContainer from "@components/ReviewContainer";
import ProductCard from "@components/ProductCard";
import FormModal from "@components/FormModal";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Chakra UI Template</title>
      </Head>

      <Heading as="h1" mb={12}>
        A Cool Ecommerce Product Review App
      </Heading>

      <ProductCard />
      <FormModal />

      <ReviewContainer />
    </div>
  );
}
