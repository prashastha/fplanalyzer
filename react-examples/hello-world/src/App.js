import React, { Component } from 'react';
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Table, Column, Cell} from 'fixed-data-table';
import logo from './logo.svg';
import './App.css';
import '../node_modules/fixed-data-table/dist/fixed-data-table.css'

// products will be presented by ReactBsTable
var rows = [
  {
      id: 1,
      name: "Alexi Sanchez",
      price: 11.5,
      ictIndex: 97
  },{
      id: 2,
      name: "Ozil",
      price: 10,
      ictIndex: 97
      
  },{
      id: 3,
      name: "Theo",
      price: 7.2,
      ictIndex: 97
  },{
      id: 4,
      name: "Ox",
      price: 6.8,
      ictIndex: 99
  },{
      id: 5,
      name: "Carzola",
      price: 8,
      ictIndex: 98
  },{
      id: 6,
      name: "Belarin",
      price: 8,
      ictIndex: 96
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Query-results">
          
          <Table
            rowHeight={50}
            rowsCount={rows.length}
            width={5000}
            height={5000}
            headerHeight={50}>
            <Column
              header={<Cell>Name</Cell>}
              cell={({rowIndex, ...props}) => (
                <Cell {...props}>
                  {rows[rowIndex].name}
                </Cell>
              )}
              width={200}
            />
            <Column
              header={<Cell>Price</Cell>}
              cell={({rowIndex, ...props}) => (
                <Cell {...props}>
                  {rows[rowIndex].price}
                </Cell>
              )}
              width={200}
            />
            <Column
              header={<Cell>ICT</Cell>}
              cell={({rowIndex, ...props}) => (
                <Cell {...props}>
                  {rows[rowIndex].ictIndex}
                </Cell>
              )}
              width={200}
            />
          </Table>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
