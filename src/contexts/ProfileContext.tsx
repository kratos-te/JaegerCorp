import React, { ReactNode, createContext, useState } from "react";

// Define the shape of the context
export interface ProfileContextProps {
  name: string;
  setName: Function;
  image: string;
  setImage: Function;
}

// Create the User context
export const ProfileContext = createContext<ProfileContextProps | null>(null);

// Create the Profile context provider component
export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>("")
  const [image, setImage] = useState<string>("")

  return (
    <ProfileContext.Provider
      value={{
        name,
        setName,
        image,
        setImage
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
