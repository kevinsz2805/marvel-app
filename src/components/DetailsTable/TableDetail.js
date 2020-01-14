import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableComics from './TableComics';
import TableStories from './TableStories';

class TableDetail extends Component {
  render() {
    return (
      <div>
        {this.props.dataTable
          .filter(a => a.id === this.props.Id)
          .map(character => {
            return (
              <div>
                <h1>{character.name}</h1>
                <img
                  src={character.thumbnail.path + '.' + character.thumbnail.extension}
                  className="image-detail"
                ></img>
                <br />
                <h3>Description</h3>
                <p className="paragraph">{character.description}</p>
                <br />
                <input type="radio" name="tabse" id="tab1" defaultChecked />
                <label htmlFor="tab1">Comic's</label>
                <input type="radio" name="tabse" id="tab2" />
                <label htmlFor="tab2">Stories</label>
                <div className="tab content1">
                  <TableComics headers={['Name', 'Resource']} dataTable={character.comics}></TableComics>
                </div>
                <div className="tab content2">
                  <TableStories headers={['Name', 'Resource', 'Type']} dataTable={character.stories}></TableStories>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default TableDetail;
