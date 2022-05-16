import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import ReviewContainer from "@components/ReviewContainer";
import ProductCard from "@components/ProductCard";
import FormModal from "@components/FormModal";
import dynamic from "next/dynamic";

const DynamicFormModal = dynamic(() => import("@components/FormModal"), {
  ssr: false,
});

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
      <DynamicFormModal />

      <ReviewContainer />
    </div>
  );
}
