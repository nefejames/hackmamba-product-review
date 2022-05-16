import { ChakraProvider } from "@chakra-ui/react";
import LayoutWrapper from "@layout/index";
import Script from "next/script";
import ReviewsContextProvider from "@context/ReviewsContext";

function MyApp({ Component, pageProps }) {
  return (
    <ReviewsContextProvider>
      <ChakraProvider>
        <Script
          src="https://upload-widget.cloudinary.com/global/all.js"
          type="text/javascript"
        />

        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ChakraProvider>
    </ReviewsContextProvider>
  );
}

export default MyApp;
