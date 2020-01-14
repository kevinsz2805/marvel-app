import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableComics extends Component {
  render() {
    console.log('entro detalle', this.props.dataTable);
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
          {this.props.dataTable.items.map(comics => {
            return (
              <tr>
                <td scope="row">{comics.name}</td>
                <td>{comics.resourceURI}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default TableComics;
