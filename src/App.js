import React, { Component } from 'react';
import './App.css';
import Customers from './components/Customers';
import { data } from './data';
import CustomerRow1 from './components/CustomerRow1';
import CustomerRow2 from './components/CustomerRow2';
import CustomerRow3 from './components/CustomerRow3';
import CustomerRow4 from './components/CustomerRow4';

const CustomerRow = {
  '1': CustomerRow1,
  '2': CustomerRow2,
  '3': CustomerRow3,
  '4': CustomerRow4,
};

class App extends Component {

  state = {
    renderType: 1
  }

  renderItems = params => {
    const Row = CustomerRow[this.state.renderType];
    return <Row  key={params.id} {...params} />;
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1 className="title">Aprender React Responsive</h1>
          <p>El título se ajusta (agranda o achica a medida que se cambia el ancho de la pantalla)</p>
        </div>
        <div className="sub-title">
          <h2>Es una aplicación simple</h2>
          <p>El sub-título se adapta a tamaños de pantalla por intervalos y cambia de color el contenedor con media query</p>
        </div>
        <div>
          <button onClick={() => { this.setState({ renderType: 1 })}}>
            Uso 2 ReactResponsive.MediaQuery por separado
          </button>
          <button onClick={() => { this.setState({ renderType: 2 })}}>
            Uso 1 ReactResponsive.MediaQuery con Matches
          </button>
          <button onClick={() => { this.setState({ renderType: 3 })}}>
            Uso MediaQuery CSS
          </button>
          <button onClick={() => { this.setState({ renderType: 4 })}}>
            Uso ReactResponsive.MediaQuery componente
          </button>          
        </div>
        <Customers data={data} renderItems={this.renderItems} />
      </div>
    );
  }
}

export default App;
