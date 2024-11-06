import { createContext, useState } from "react";
import { appFirebase } from "../credentials";
import { getAuth, onAuthStateChanged } from  'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = getAuth(appFirebase);
  const [user, setUser] = useState(null);
  
  

// funcion de autenticacion
  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase)
    } else {
      setUser(null)
    }
  });

  return(
    <AuthContext.Provider
      value={{
        user, setUser,
        auth
      }}>

      { children }

    </AuthContext.Provider>
  );
};
