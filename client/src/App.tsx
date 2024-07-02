import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Data from "./views/Data/Data";
import { store } from './app/store'
import { Provider } from 'react-redux'
import "./App.css";

function ProvidedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/data" element={<Data />} />
    </Routes>
  );
}

export default ProvidedApp;
