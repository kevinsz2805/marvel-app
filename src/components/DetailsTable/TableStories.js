import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import listIcon from "../../assets/2.png";

class TableStories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataTable: [],
      filterTitle: ""
    };
  }

  componentDidUpdate = prevProps => {
    if (prevProps.dataTableStories !== this.props.dataTableStories) {
      this.setState({ dataTable: this.props.dataTableStories });
    }
  };

  filterByTitle = filterTitle => {
    if (filterTitle.trim().length === 0) {
      this.setState({ dataTable: this.props.dataTableStories, filterTitle: "" });
    } else {
      const dataTable = this.props.dataTableStories.filter(d =>
        d.title.toLowerCase().includes(filterTitle.toLowerCase())
      );
      this.setState({ dataTable, filterTitle });
    }
  };

  render() {
    console.log('stories',this.state.dataTable)
    return (
      <Fragment>
        {this.state.dataTable.map(stories => {
          return (
            <div className="col-md-12">
           
                  <div className="divStories">
                    <img className="imge-list-stories" src={listIcon} ></img>
                    {stories.title}</div>
             
            </div>
          );
        })}
      </Fragment>
    );
  }
}

TableStories.propTypes = {
  dataTableStories: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired
};

export default connect(null)(TableStories);
