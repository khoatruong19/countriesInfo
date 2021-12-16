import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeContextProvider} from "./context/ThemeContextProvider"
import {RegionContextProvider} from "./context/RegionContextProvider"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import store from "./store/store"
import {Provider} from "react-redux"
ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RegionContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </RegionContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
