import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class TableComics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataTable: [],
      filterName: "",
      filterFormat: "",
      filterIssueNumber: ""
    };
  }

  componentDidUpdate = prevProps => {
    if (prevProps.dataTableComics !== this.props.dataTableComics) {
      this.setState({ dataTable: this.props.dataTableComics });
    }
  };

  filterByName = filterName => {
    if (filterName.trim().length === 0) {
      this.setState({ dataTable: this.props.dataTableComics, filterName: "" });
    } else {
      const dataTable = this.props.dataTableComics.filter(d =>
        d.title.toLowerCase().includes(filterName.toLowerCase())
      );
      this.setState({ dataTable, filterName });
    }
  };

  filterByIssueNumber = filterIssueNumber => {
    if (filterIssueNumber.trim().length === 0) {
      this.setState({ dataTable: this.props.dataTableComics, filterIssueNumber: "" });
    } else {
      const dataTable = this.props.dataTableComics.filter(d =>
        d.issueNumber.toString().includes(filterIssueNumber.toString())
      );
      this.setState({ dataTable, filterIssueNumber });
    }
  };

  filterByFormat = filterFormat => {
    if (filterFormat.trim().length === 0) {
      this.setState({ dataTable: this.props.dataTableComics, filterFormat: "" });
    } else {
      const dataTable = this.props.dataTableComics.filter(d =>
        d.format.toLowerCase().includes(filterFormat.toLowerCase())
      );
      this.setState({ dataTable, filterFormat });
    }
  };

  render() {
    return (
      <Fragment>
        {this.state.dataTable.map(comics => {
          return (
            <div className="col-md-3">
              <ul>
                <li key={comics.id}>
                  <img src={comics.thumbnail.path + "." + comics.thumbnail.extension} className="image-comic"></img>
                  <div className="divulliComics">{comics.title}</div>
                </li>
              </ul>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

TableComics.propTypes = {
  dataTableComics: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired
};

export default connect(null)(TableComics);
