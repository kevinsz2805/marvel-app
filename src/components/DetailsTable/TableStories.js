import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableStories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataTable: [],
      filterTitle: ''
    };
  }
  //   componentDidMount() {
  //     this.setState({ dataTable: this.props.dataTableStories });
  //   }

  componentDidUpdate = prevProps => {
    if (prevProps.dataTableStories !== this.props.dataTableStories) {
      this.setState({ dataTable: this.props.dataTableStories });
    }
  };

  filterByTitle = filterTitle => {
    if (filterTitle.trim().length === 0) {
      this.setState({ dataTable: this.props.dataTableStories, filterTitle: '' });
    } else {
      const dataTable = this.props.dataTableStories.filter(d =>
        d.title.toLowerCase().includes(filterTitle.toLowerCase())
      );
      this.setState({ dataTable, filterTitle });
    }
  };

  render() {
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
                value={this.state.filterTitle}
                onChange={e => this.filterByTitle(e.target.value)}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.dataTable.map(stories => {
            return (
              <tr>
                <td scope="row">{stories.title}</td>
                <td>{stories.description}</td>
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
