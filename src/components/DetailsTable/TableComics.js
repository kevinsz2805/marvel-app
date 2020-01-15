import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableComics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataTable: [],
      filterName: '',
      filterFormat: '',
      filterIssueNumber: ''
    };
  }
  //   componentDidMount() {
  //     this.setState({ dataTable: this.props.dataTableComics });
  //   }

  componentDidUpdate = prevProps => {
    if (prevProps.dataTableComics !== this.props.dataTableComics) {
      this.setState({ dataTable: this.props.dataTableComics });
    }
  };

  filterByName = filterName => {
    if (filterName.trim().length === 0) {
      this.setState({ dataTable: this.props.dataTableComics, filterName: '' });
    } else {
      const dataTable = this.props.dataTableComics.filter(d =>
        d.title.toLowerCase().includes(filterName.toLowerCase())
      );
      this.setState({ dataTable, filterName });
    }
  };

  filterByIssueNumber = filterIssueNumber => {
    if (filterIssueNumber.trim().length === 0) {
      this.setState({ dataTable: this.props.dataTableComics, filterIssueNumber: '' });
    } else {
      const dataTable = this.props.dataTableComics.filter(d =>
        d.issueNumber.toString().includes(filterIssueNumber.toString())
      );
      this.setState({ dataTable, filterIssueNumber });
    }
  };

  filterByFormat = filterFormat => {
    if (filterFormat.trim().length === 0) {
      this.setState({ dataTable: this.props.dataTableComics, filterFormat: '' });
    } else {
      const dataTable = this.props.dataTableComics.filter(d =>
        d.format.toLowerCase().includes(filterFormat.toLowerCase())
      );
      this.setState({ dataTable, filterFormat });
    }
  };

  render() {
    //console.log('entro detalle', this.props.dataTableComics.issueNumber);
    return (
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            {this.props.headers.map(header => {
              return <th scope="col">{header}</th>;
            })}
          </tr>
          <tr>
            <th>
              <input
                type="text"
                className="form-control"
                value={this.state.filterName}
                onChange={e => this.filterByName(e.target.value)}
              />
            </th>
            <th></th>
            <th>
              <input
                type="number"
                className="form-control"
                value={this.state.filterIssueNumber}
                onChange={e => this.filterByIssueNumber(e.target.value)}
              />
            </th>
            <th>
              <input
                type="text"
                className="form-control"
                value={this.state.filterFormat}
                onChange={e => this.filterByFormat(e.target.value)}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.dataTable.map(comics => {
            return (
              <tr>
                <td scope="row">{comics.title}</td>
                <td>{comics.description}</td>
                <td>{comics.issueNumber}</td>
                <td>{comics.format}</td>
                <td>
                  <img src={comics.thumbnail.path + '.' + comics.thumbnail.extension} className="image-comic"></img>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default TableComics;
