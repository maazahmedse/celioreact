import logo from './logo.svg';
import './App.css';
import AppRoutes from './routes/Approutes';
import { AuthProvider } from './context/authContext';
import { LoaderProvider } from './context/LoaderContext';
import { ToastProvider } from './context/ToastContext';

function App() {
  return (
    <div>
      <LoaderProvider>
        <ToastProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </ToastProvider>
      </LoaderProvider>
    </div>
  );
}

export default App;
