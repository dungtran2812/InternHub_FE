import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store.js'
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './containers/App/App.jsx'
import { Toaster } from "@/components/ui/toaster"

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
        <Toaster/>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)
