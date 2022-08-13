import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, legacy_createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

import './index.css';
import App from './Components/App';

const logger=({dispatch,getState})=>(next)=>(action)=>{
  if(typeof action!=='function'){console.log('action type=',action.type);}
  next(action);
}

// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//   if(typeof action==='function'){
//     action(dispatch);
//   }
//   next(action);     //we commented this out because we are using thunk package and thunk will write the same code for us internally
// }
const store=legacy_createStore(rootReducer,applyMiddleware(logger,thunk));

// console.log('store',store)
console.log("store state",store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'superman'}]
// })
// console.log('AFTER STATE',store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
