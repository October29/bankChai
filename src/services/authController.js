import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const authenticationFunc = async (auth, email, password, register) => {

  if (register) {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch {
      alert("La contrasena debe terner al menos 8 caracteres");
    }
  } else {
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        alert("Usuario o contrasena incorrectas");
      }
  }
}
