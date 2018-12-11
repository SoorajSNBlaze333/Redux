import { connect } from 'react-redux'
import React from 'react';

const mapStateToProps = state => {
  return { articles: state.articles };
};
//
const ConnectedList = ({ articles }) => {
  console.log("articles --- ", articles)
  return (
          <ul>
            {articles.map(el => (
              <li key={el.id}>
                {console.log(el.title)}
              </li>
            ))}
    </ul>
  )
}

export const List = connect(mapStateToProps)(ConnectedList);