import Header from "../../shared/components/Header";
import { ToastProvider } from "./lld/ToastNotificationSystem/ToastProvider";
import AppRoutes from "./Routes";
import '../../styles/App.css'


function App() {
  return (
    <ToastProvider>
      <Header />
      <AppRoutes />
    </ToastProvider>
  );
}

export default App;
