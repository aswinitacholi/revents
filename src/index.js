import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureReduxStore } from './app/Store/configureStore';
import ScrollToTop from './app/layout/ScrollToTop';

const store = configureReduxStore();
const rootEl = document.getElementById('root');

if (module.hot) {
  module.hot.accept('./app/layout/App', function(){
    setTimeout(render)
  })
}
render();
function render() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop/>
      <App/>
    </BrowserRouter>
    </Provider>,
    rootEl
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


