import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import DetailsContainer from "../DetailsTable/DetailsContainer";
import PropTypes from "prop-types";
import filter from "../../assets/filter.png";

class TableMaster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      id: "",
      dataTable: [],
      filterName: ""
    };
  }

  componentDidUpdate = prevProps => {
    if (prevProps.dataTable !== this.props.dataTable) {
      this.setState({ dataTable: this.props.dataTable });
    }
  };

  showModal(id) {
    this.setState({ showModal: true, id: id });
  }

  hideModal = () => {
    this.setState({ showModal: false });
  };

  filterByName = filterName => {
    if (filterName.trim().length === 0) {
      this.setState({ dataTable: this.props.dataTable, filterName: "" });
    } else {
      const dataTable = this.props.dataTable.filter(d => d.name.toLowerCase().includes(filterName.toLowerCase()));
      this.setState({ dataTable, filterName });
    }
  };

  render() {
    return (
      <Fragment>
        <this.Modal show={this.state.showModal} handleClose={this.hideModal}>
          <DetailsContainer Id={this.state.id} dataTable={this.props.dataTable} />
        </this.Modal>
        <div className="clearfix">
          <div className="col-md-6 div-filter">
            <h2 className="title-filter">Filters</h2>
            <img className="image-filter" src={filter} />
            <input
              type="text"
              placeholder="Search by name..."
              className="form-control"
              value={this.state.filterName}
              onChange={e => this.filterByName(e.target.value)}
            />
            <br />
          </div>

          <br />
        </div>
        {this.state.dataTable.map(character => {
          return (
            <div className="col-md-3">
              <ul>
                <li key={character.id} onClick={() => this.showModal(character.id)}>
                  <img
                    src={character.thumbnail.path + "." + character.thumbnail.extension}
                    className="image-comic"
                  ></img>
                  <div className="divulli">{character.name}</div>
                </li>
              </ul>
            </div>
          );
        })}
      </Fragment>
    );
  }

  //Modal for the Details Table

  Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="modal-container">{children}</div>
          <button className="buttonClose" onClick={handleClose}>
            X
          </button>
        </section>
      </div>
    );
  };
}

TableMaster.propTypes = {
  dataTable: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    dataTable: state.characters
  };
}

export default connect(mapStateToProps)(TableMaster);
