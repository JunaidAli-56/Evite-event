import './App.scss'
import Routes from "./pages/Routes"
import "bootstrap/dist/js/bootstrap.bundle"
import './config/global'
import { ToastContainer } from 'react-toastify';
import { AuthContextProvider } from 'pages/Context/AuthContext';
function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes />

        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </AuthContextProvider>
    </>
  )
}

export default App;
