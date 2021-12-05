import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import {FitToViewport} from 'react-fit-to-viewport'
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <FitToViewport>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </FitToViewport>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
