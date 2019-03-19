import React, { Component } from 'react';
import {connect} from 'react-redux';

import someFunc from './redux/actions/testActions';

import './App.css';

class App extends Component {
  render() {
    const {fieldName, propName} = this.props;
    return (
      <div className="App">
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    propName: state.propName
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fieldName: function() {
      dispatch(someFunc())
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps) (App);
