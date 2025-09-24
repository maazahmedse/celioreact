import logo from './logo.svg';
import './App.css';
import AppRoutes from './routes/Approutes';
import { AuthProvider } from './context/authContext';
import { LoaderProvider } from './context/LoaderContext';

function App() {
  return (
    <div>
      <LoaderProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </LoaderProvider>
    </div>
  );
}

export default App;
