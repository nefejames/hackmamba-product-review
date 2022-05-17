import { createContext, useContext, useState } from "react";

const ImageUploadContext = createContext("");
export const useImageUploadContext = () => useContext(ImageUploadContext);

export default function ImageUploadContextProvider({ children }) {
  const [uploadedImgUrl, setUploadedImgUrl] = useState(null);

  return (
    <ImageUploadContext.Provider value={{ uploadedImgUrl, setUploadedImgUrl }}>
      {children}
    </ImageUploadContext.Provider>
  );
}
