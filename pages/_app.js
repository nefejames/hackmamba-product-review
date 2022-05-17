import { ChakraProvider } from "@chakra-ui/react";
import LayoutWrapper from "@layout/index";
import Script from "next/script";
import ReviewsContextProvider from "@context/ReviewsContext";
import ImageUploadContextProvider from "@context/ImageUploadContext";

function MyApp({ Component, pageProps }) {
  return (
    <ReviewsContextProvider>
      <ImageUploadContextProvider>
        <ChakraProvider>
          <Script
            src="https://upload-widget.cloudinary.com/global/all.js"
            type="text/javascript"
            strategy="beforeInteractive"
          />

          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
        </ChakraProvider>
      </ImageUploadContextProvider>
    </ReviewsContextProvider>
  );
}

export default MyApp;
