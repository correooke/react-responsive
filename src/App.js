import React, { Component } from 'react';
import './App.css';
import Customers from './components/Customers';
import { data } from './data';
import CustomerRow from './components/CustomerRow';
import CustomerRow2 from './components/CustomerRow2';
import CustomerRow3 from './components/CustomerRow3';

class App extends Component {

  state = {
    renderType: 0
  }

  renderItems = params => {
    switch (this.state.renderType) {
      case 0:
        return <CustomerRow {...params} />;
      case 1:
        return <CustomerRow2 {...params} />;
      case 2:
        return <CustomerRow3 {...params} />;
    
      default:
        return null;
    }
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
          <button onClick={() => { this.setState({ renderType: 0 })}}>
            Uso 2 ReactResponsive.MediaQuery por separado
          </button>
          <button onClick={() => { this.setState({ renderType: 1 })}}>
            Uso 1 ReactResponsive.MediaQuery con Matches
          </button>
          <button onClick={() => { this.setState({ renderType: 2 })}}>
            Uso MediaQuery CSS
          </button>
        </div>
        <Customers data={data} renderItems={this.renderItems} />
      </div>
    );
  }
}

export default App;
