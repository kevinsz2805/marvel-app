import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import DetailsContainer from "../DetailsTable/DetailsContainer";

class TableMaster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      id: [],
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
    console.log("table master", this.state.dataTable);
    return (
      <Fragment>
        <this.Modal show={this.state.showModal} handleClose={this.hideModal}>
          <DetailsContainer Id={this.state.id} dataTable={this.props.dataTable} />
        </this.Modal>

        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              {this.props.headers.map(header => {
                return <th scope="col">{header}</th>;
              })}
            </tr>
            <tr>
              <th></th>
              <th>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.filterName}
                  onChange={e => this.filterByName(e.target.value)}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataTable.map(character => {
              return (
                <tr key={character.id} onClick={() => this.showModal(character.id)}>
                  <td scope="row">{character.id}</td>
                  <td>{character.name}</td>
                  <td>{character.description}</td>
                  <td>
                  <td>
                  <img src={character.thumbnail.path + '.' + character.thumbnail.extension} className="image-comic"></img>
                </td>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
          <button className="buttonClose" onClick={handleClose}>X</button>
        </section>
      </div>
    );
  };
}

export default TableMaster;
