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
  }

  render() {
    return (
      <div>
        <div class="sec-title centered">
          <img className="image-index" src={banner} />
        </div>

        <div class="col-md-12">
          <TableMaster headers={["Id", "Name", "Description", "Image"]} dataTable={this.props.characters} />
        </div>
      </div>
    );
  }
}

MasterContainer.propTypes = {
  characterActions: PropTypes.object,
  characters: PropTypes.array
};

function mapStateToProps(state) {
  return {
    characters: state.characters
  };
}

function mapDispatchToProps(dispatch) {
  return {
    characterActions: bindActionCreators(characterActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MasterContainer);
