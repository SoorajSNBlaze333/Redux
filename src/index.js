import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Form } from './Form';
import { List } from './List';
import { Row, Col } from 'antd';
//
const ADD_COUNTER = "ADD_COUNTER";
//
export const addCounter = counter => ({
  type: ADD_COUNTER,
  payload: counter
})
//
const initialState = {
  counter: 0
};
//
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return Object.assign({},state,{counter:state.counter.concat(action.payload)});
    default:
      return state;
  }
}
//
const store = createStore(rootReducer);
window.store = store;
window.addCounter = addCounter;
store.subscribe(()=>console.log(store))
//
class App extends React.Component {
  render() {
    return (
      <Row>
        <Col span={12}><List/></Col>
        <Col span={12}><Form /></Col>
      </Row>
    )
  }
}
//
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)