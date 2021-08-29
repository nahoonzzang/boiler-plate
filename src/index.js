// 실제 앱이 index.js 에서 시작된다고 보면 됨

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // Redux 연결
import 'antd/dist/antd.css';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import Reducer from './_reducers' // _reducers/index.js 를 자동으로 찾아옴

// 그냥 store 는 Object 밖에 받지 못하기 때문에 function, promise 를 받게 해주기 위해서 middleware(promiseMiddleware, ReduxThunk) 를 사용
// store 에서 function, promise 를 받아야 하는 이유는? -> store 에 저장된 state 를 불러와 사용할때 function, promise 가 나올 수도 있기 때문이고, store 의 state 를 변경하기 위해서는
// action(dispatch) 가 발생해야 하는데, action 은 기본적으로 plain object 임.
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(
  <Provider // Provider 안에 Redux Store를 넣어줘야함
    store={createStoreWithMiddleware(Reducer, 
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()  
    )}
  >
    <App />
  </Provider> // App 에다가 Redux 연결 시켜줘야 함

, document.getElementById('root'));

reportWebVitals();

// props 불번 : 부모 -> 자식으로만 간으
// state 가변 : 컴포 <-> 컴포