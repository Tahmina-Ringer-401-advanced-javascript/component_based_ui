import React from 'react';
import '../form/form.scss'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      url: '',
      method: ''
    }
  }
  
  
  handleSubmit = e => {
    e.preventDefault();
    let url = e.target.url.value;
    this.setState({ url });
    
    if(this.state.method){ this.setState({ display: true })}
  }
  
  getPokemon = async (e) => {
    const url = this.state.url;
    console.log(this.state.method);
    const pokemon = await fetch(url, {method: this.state.method, mode: 'cors'})
    
    .then(res => {
      for( var pair of res.headers.entries()) {
        console.log(pair[0]+ ': '+ pair[1]);
        if (pair[0] === 'x-total-count') {
          this.setState({
            total: pair[1]
          })
        }
      }
      if(res.status !==200)return;
      return res.json();
    })
    this.props.givePokemon(pokemon.results, pokemon.count);
  }
  
  handleClick = e => {
    console.log(e);
    let method = e.target.name;
    this.setState({ method });

    if(this.state.url){ this.setState({ display: true })}
  };

  render() {
    return(
      <div id="form">
      <form onSubmit={this.handleSubmit}>
        <label for="url">URL:</label>
        <input type='text' name="url" />
        <button type='submit' onClick={this.getPokemon}>GO!</button>
      </form>
        <div class="buttons">
        <legend>Select a Method</legend>
          <button name="get" onClick={this.handleClick}>GET</button>
          <button name="post" onClick={this.handleClick}>POST</button>
          <button name="put" onClick={this.handleClick}>PUT</button>
          <button name="delete" onClick={this.handleClick}>DELETE</button>
        </div>
      </div>
    )
  };
};

  export default Form;