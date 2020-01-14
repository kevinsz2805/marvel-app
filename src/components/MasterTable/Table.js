import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import DetailsContainer from '../DetailsTable/DetailsContainer';

class TableMaster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      id: [],
      dataTable: [],
      filterStr: ''
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

  changeFilterStr = filterStr => {
    console.log(filterStr);
    if (filterStr.trim().length === 0) {
      this.setState({ dataTable: this.props.dataTable, filterStr: '' });
    } else {
      const dataTable = this.props.dataTable.filter(d => d.name.toLowerCase().includes(filterStr.toLowerCase()));
      this.setState({ dataTable, filterStr });
    }
  };

  render() {
    return (
      <Fragment>
        <this.Modal show={this.state.showModal} handleClose={this.hideModal}>
          <DetailsContainer Id={this.state.id} headers={['1', '2']} dataTable={this.props.dataTable} />
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
                <input type="text" value={this.state.filterStr} onChange={e => this.changeFilterStr(e.target.value)} />
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </Fragment>
    );
  }

  Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <h1></h1>
          <br />
          <div className="modal-container">{children}</div>
          <button onClick={handleClose}>Close</button>
        </section>
      </div>
    );
  };
}

export default TableMaster;
