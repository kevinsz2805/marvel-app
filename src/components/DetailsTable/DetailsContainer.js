import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TableDetail from './TableDetail';
import PropTypes from 'prop-types';
import * as characterComicActions from '../../actions/actions';

class DetailsContainer extends Component {
  //   componentDidMount() {
  //     this.props.characterComicActions.fetchCharactersComics(this.props.Id);
  //   }

  componentDidUpdate = prevProps => {
    if (prevProps.Id !== this.props.Id) {
      //    this.setState({ dataTable: this.props.dataTable.items });
      //  }
      this.props.characterComicActions.fetchCharactersComics(this.props.Id);
      this.props.characterComicActions.fetchCharactersStories(this.props.Id);
    }
  };

  render() {
    return (
      <TableDetail
        Id={this.props.Id}
        dataTable={this.props.dataTable}
        dataTableComics={this.props.comics}
        dataTableStories={this.props.stories}
      />
    );
  }
}

DetailsContainer.propTypes = {
  characterComicActions: PropTypes.object,
  comics: PropTypes.array,
  stories: PropTypes.array
};

function mapStateToProps(state) {
  return {
    comics: state.comics,
    stories: state.stories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    characterComicActions: bindActionCreators(characterComicActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
