import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableStories extends Component {
  render() {
    //console.log('entro detalle',this.props)
    return (
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            {this.props.headers.map(header => {
              return <th scope="col">{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {this.props.dataTable.items.map(stories => {
            return (
              <tr>
                <td scope="row">{stories.name}</td>
                <td>{stories.resourceURI}</td>
                <td>{stories.type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default TableStories;
