import React from 'react';
import ReactDOM from 'react-dom/client';
import AppForm from './AppForm';
// import AppMentors from './AppMentors';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import AppProfile from './AppProfile';
// import AppJSX from './AppJSX';
// import AppCount from './AppCount';
// import AppProducts from './AppProducts';
// import AppXY from './AppXY';
// import AppMentor from './AppMentor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppJSX /> */}
    {/* <AppProfile /> */}
    {/* <AppCount /> */}
    {/* <AppProducts /> */}
    {/* <AppXY /> */}
    {/* <AppMentor /> */}
    {/* <AppMentors /> */}
    <AppForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
