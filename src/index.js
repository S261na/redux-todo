import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
  <Provider store={store}>  {/* компоненет который раздет всем дочерним доступ к store - большое хранилище   */}
     <App />
  </Provider>
  </BrowserRouter>
   
  
);



