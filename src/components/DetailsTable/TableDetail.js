import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import TableComics from "./TableComics";
import TableStories from "./TableStories";
import PropTypes from "prop-types";

class TableDetail extends Component {
  render() {
    return (
      <div>
        {this.props.dataTable &&
          this.props.dataTable
            .filter(a => a.id === this.props.id)
            .map(character => {
              return (
                <div className="container">
                  <Fragment>
                    <div className="col-md-3">
                      <ul>
                        <li key={character.id} onClick={() => this.showModal(character.id)}>
                          <img
                            src={character.thumbnail.path + "." + character.thumbnail.extension}
                            className="image-comic"
                          ></img>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-9">
                      <p className="paragraph">{character.name}</p>

                      <p className="paragraphDescription">
                        {character.description !== ""
                          ? character.description
                          : "No description available for this character."}
                      </p>
                    </div>
                  </Fragment>
                  <Fragment>
                    <div className="col-md-12">
                      <div className="row">
                        <hr></hr>
                        <h1>Comics</h1>
                        <TableComics
                          headers={["Title", "Description", "Issue Number", "Format", "Image"]}
                          dataTableComics={this.props.dataTableComics}
                        ></TableComics>
                        <div class="clearfix">
                          <br />
                        </div>
                        <hr></hr>
                        <h1>Stories</h1>
                        <TableStories
                          headers={["Title", "Description", "Resource", "Type"]}
                          dataTableStories={this.props.dataTableStories}
                        ></TableStories>
                      </div>
                    </div>
                  </Fragment>
                </div>
              );
            })}
      </div>
    );
  }
}

TableDetail.propTypes = {
  dataTable: PropTypes.array,
  dataTableComics: PropTypes.array,
  dataTableStories: PropTypes.array,
  id: PropTypes.string
};

export default connect(null)(TableDetail);
