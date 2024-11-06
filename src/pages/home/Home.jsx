import { appFirebase } from '../../credentials';
import { getAuth, signOut } from 'firebase/auth';
const auth = getAuth(appFirebase);

const Home = ({ userEmail }) => {
  return (
    <div>Biemvenido {userEmail} <button onClick={() => signOut(auth)} >Cerrar sesion</button> </div>
  )
}

export default Home;