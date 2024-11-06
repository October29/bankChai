import { AuthProvider } from './context/AuthContext.jsx';
import './App.css'
import AppContainer from './components/financial/appContainer/AppContainer.jsx';

// importar componentes

function App() {
 

  return (
    <AuthProvider>
    <div>
      <AppContainer />
    </div>
    </AuthProvider>
  );
};

export default App;
