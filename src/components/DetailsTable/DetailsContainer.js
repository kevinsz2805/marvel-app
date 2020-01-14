import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TableDetail from './TableDetail';

class DetailsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const name = this.state.characters[0].name
    return <TableDetail Id={this.props.Id} headers={this.props.headers} dataTable={this.props.dataTable} />;
  }
}

export default DetailsContainer;
