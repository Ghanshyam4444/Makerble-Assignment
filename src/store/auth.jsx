import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [stories, setStories] = useState([
    "This is my first story!",
    "Just another day in paradise.",
    "Loving the new updates on this app!",
  ]);
  return (
    <AuthContext.Provider value={{ stories, setStories }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextvalue = useContext(AuthContext);
  if (!AuthContextvalue) {
    throw new Error("useAuth used outside of the provider");
  }
  return AuthContextvalue;
};
