import { FormControl, Input, Stack, Text, Button } from "@chakra-ui/react";
import { useReviewsContext } from "context/ReviewsContext";
import { useForm } from "react-hook-form";

export default function Form({ closeModal }) {
  const { reviews, setReviews } = useReviewsContext();

  function showWidget() {
    if (typeof window !== "undefined") {
      window.cloudinary.createUploadWidget(
        {
          cloudName: "nefejames",
          uploadPreset: "preset",
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
          }

          if (error) {
            console.log(error);
          }
        }
      );
    }
  }

  const { handleSubmit, register } = useForm();

  function onSubmit(value) {
    console.log(value);
    setReviews([...reviews, value.review]);
    closeModal();
  }

  return (
    <Stack spacing={4}>
      <Text>Please leave a review</Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input type="text" {...register("review")} />
          <Button onClick={showWidget}>upload image</Button>
        </FormControl>

        <Button colorScheme="blue" mt={3} type="submit">
          Submit
        </Button>
      </form>
    </Stack>
  );
}
