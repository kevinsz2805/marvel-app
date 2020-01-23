import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TableMaster from "./Table";
import * as characterActions from "../../actions/actions";
import PropTypes from "prop-types";
import DetailsContainer from "../DetailsTable/DetailsContainer";
import banner from "../../assets/1.jpg";

class MasterContainer extends Component {
  componentDidMount() {
    this.props.characterActions.fetchCharacters();
    this.props.characterActions.fetchAllComics();
  }

  render() {
    console.log("comics", this.props.allComics);
    return (
      <Fragment>
        <div>
          <div className="sec-title centered">
            <img className="image-index" src={banner} />
          </div>
          <div className="clearfix">
            <br />
          </div>
          {/* Tabs for the character and comics */}
          <div className="tabs">
            <div className="tab-2">
              <label htmlFor="tab2-1">CHARACTERS</label>
              <input id="tab2-1" name="tabs-two" type="radio" defaultChecked />
              <div>
                content character
              </div>
            </div>
            <div className="tab-2">
              <label htmlFor="tab2-2">COMICS</label>
              <input id="tab2-2" name="tabs-two" type="radio" />
              <div>
                content comics
              </div>
            </div>
          </div>

          {/* End of tabs */}
          <div className="col-md-12">
            <TableMaster headers={["Id", "Name", "Description", "Image"]} dataTable={this.props.characters} />
          </div>
        </div>
      </Fragment>
    );
  }
}

MasterContainer.propTypes = {
  characterActions: PropTypes.object,
  characters: PropTypes.array,
  allComics: PropTypes.array
};

function mapStateToProps(state) {
  return {
    characters: state.characters,
    allComics: state.allComics
  };
}

function mapDispatchToProps(dispatch) {
  return {
    characterActions: bindActionCreators(characterActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MasterContainer);
