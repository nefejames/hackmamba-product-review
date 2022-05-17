import { createContext, useContext, useState } from "react";

const ReviewsContext = createContext(null);
export const useReviewsContext = () => useContext(ReviewsContext);

export default function ReviewsContextProvider({ children }) {
  const [reviews, setReviews] = useState([
    { reviewText: "first review", reviewImage: "/product.webp" },
    { reviewText: "second review", reviewImage: "/product.webp" },
  ]);

  return (
    <ReviewsContext.Provider value={{ reviews, setReviews }}>
      {children}
    </ReviewsContext.Provider>
  );
}
