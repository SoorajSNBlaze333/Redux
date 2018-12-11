import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Form } from './Form';
import { List } from './List';
import { Row, Col } from 'antd';
//
const ADD_ARTICLE = "ADD_ARTICLE";
//
export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
})
//
const initialState = {
  articles:[]
};
//
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({},state,{articles:state.articles.concat(action.payload)});
    default:
      return state;
  }
}
//
const store = createStore(rootReducer);
window.store = store;
window.addArticle = addArticle;
store.subscribe(()=>console.log("Article Added!!"))
//
class App extends React.Component {
  render() {
    return (
      <Row>
        <Col span={12}><div>Articles</div><List/></Col>
        <Col span={12}><div>Add New Article</div><Form /></Col>
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