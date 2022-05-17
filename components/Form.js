import { FormControl, Input, Stack, Text, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useReviewsContext } from "context/ReviewsContext";
import { useImageUploadContext } from "@context/ImageUploadContext";

export default function Form({ closeModal }) {
  const { reviews, setReviews } = useReviewsContext();
  const { uploadedImgUrl, setUploadedImgUrl } = useImageUploadContext();

  function showWidget() {
    window.cloudinary
      .createUploadWidget(
        {
          cloudName: "nefejames",
          uploadPreset: "ml_default",
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            setUploadedImgUrl(result.info.thumbnail_url);
          }

          if (error) {
            console.log(error);
          }
        }
      )
      .open();
  }

  const { handleSubmit, register } = useForm();

  function onSubmit(value) {
    console.log(value);

    setReviews([
      ...reviews,
      { reviewText: value.reviewText, reviewImage: uploadedImgUrl },
    ]);
    closeModal();
  }

  return (
    <Stack spacing={4}>
      <Text>Please leave a review</Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input type="text" {...register("reviewText")} />
          <Button onClick={showWidget}>upload image</Button>
        </FormControl>

        <Button colorScheme="blue" mt={3} type="submit">
          Submit
        </Button>
      </form>
    </Stack>
  );
}
