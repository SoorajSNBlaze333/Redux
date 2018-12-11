import React from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addArticle } from './index';

class ConnectedForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: [event.target.value] });
  }
  handleSubmit(event) {
    event.preventDefault();
    const title = this.state;
    var id = uuidv1();
    this.props.addArticle({ title ,id });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="title" value={title} onChange={this.handleChange} placeholder="Article" />
        <button type="submit">Add</button>
      </form>
    )
  }
}
//
const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};
//
export const Form = connect(null, mapDispatchToProps)(ConnectedForm);