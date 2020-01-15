import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import TableComics from './TableComics';
import TableStories from './TableStories';
import PropTypes from 'prop-types';

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
                    <div className="row">
                      <h1>{character.name}</h1>
                      <img
                        src={character.thumbnail.path + '.' + character.thumbnail.extension}
                        className={character.description !== '' ? 'image-detail' : 'image-detail-center'}
                      ></img>
                      <br />
                      <p className="paragraph">{character.description}</p>
                    </div>
                  </Fragment>
                  <Fragment>
                    <div className="row">
                      <input type="radio" name="tabse" id="tab1" defaultChecked />
                      <label htmlFor="tab1">Comic's</label>
                      <input type="radio" name="tabse" id="tab2" />
                      <label htmlFor="tab2">Stories</label>
                      <div className="tab content1">
                        <TableComics
                          headers={['Title', 'Description', 'Issue Number', 'Format', 'Image']}
                          dataTableComics={this.props.dataTableComics}
                        ></TableComics>
                      </div>
                      <div className="tab content2">
                        <TableStories
                          headers={['Title', 'Description', 'Resource', 'Type']}
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
