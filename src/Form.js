import React from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addCounter } from './index';

class ConnectedForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const title = this.state;
    const id = uuidv1();
    this.props.addCounter({ title, id });
    this.setState({ title: "" });
  }
  render() {
    return (
        <button onClick={this.handleSubmit} type="submit">Add</button>
    )
  }
}
//
const mapDispatchToProps = dispatch => {
  return {
    addCounter: counter => dispatch(addCounter(counter))
  };
};
//
export const Form = connect(null, mapDispatchToProps)(ConnectedForm);