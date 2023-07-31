import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const AuthContext = createContext<{
  authed: boolean;
  setAuthed: Dispatch<SetStateAction<boolean>>;
}>({
  authed: false,
  setAuthed: () => false,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authed, setAuthed] = useState(false);
  return (
    <AuthContext.Provider value={{ authed, setAuthed }}>
      {authed}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth was called without a provider");
  }
  return context;
};
