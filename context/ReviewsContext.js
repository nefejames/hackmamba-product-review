import { createContext, useContext, useState } from "react";

const ReviewsContext = createContext(null);
export const useReviewsContext = () => useContext(ReviewsContext);

export default function ReviewsContextProvider({ children }) {
  const [reviews, setReviews] = useState(["first", "second"]);

  return (
    <ReviewsContext.Provider value={{ reviews, setReviews }}>
      {children}
    </ReviewsContext.Provider>
  );
}
