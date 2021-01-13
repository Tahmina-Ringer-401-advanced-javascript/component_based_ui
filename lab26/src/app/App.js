import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Form from '../form/form';
import Results from '../results/results'
import '../app/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      count: 0,
      pokemon: []
    }
  }

    getPokemon = (pokemon, count) => {
      this.setState({ pokemon });
      this.setState({ count });
    }

    render() {
      return(
        <div id="app">
          <Header />
          <Form
            givePokemon={this.getPokemon} 
          />
          <Results 
            pokemon={this.state.pokemon}
            count={this.state.count}
          />
          <Footer />
        </div>
      )
    };
 
};

export default App;
