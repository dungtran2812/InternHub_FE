import { useSelector } from 'react-redux';
import setUpInterceptor from '../../services/baseRequest';
import { store } from '../../store/store';
import './App.css'
// import '@ant-design/v5-patch-for-react-19';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import AppRoutes from '../../routes/Routes';

// Set up API interceptor for handling disconnect and token expiration
setUpInterceptor(store);

function App() {
  const isOnline = useSelector((state) => state.rootReducer.app.onLineStatus);
  useEffect(() => {
    if (!isOnline) {
      toast("You are offline!");
    }
  }, [isOnline])
  
  return (
    <>
      <div className="App">
        <AppRoutes />
        {!isOnline && <ToastContainer />}
      </div>
    </>
  )
}

export default App
