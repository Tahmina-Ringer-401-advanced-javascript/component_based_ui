import React from 'react';
import './form.scss'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'http:/localhost:3001/'
    }
  }

  handleInput = e => {
    let newInput = e.target.value;
    this.setState({ url: newInput });
  };
  
  handleClick = e => {
    e.preventDefault();
    let newInput = e.target.value;
    this.setState({ url: newInput });
  };

  render() {
    return(
      <>
      <form>
        <label for="url">URL:</label>
        <input name="url" onChange={this.handleInput}/>
        <button type='submit' onClick={this.handleClick}>GO!</button>
        <fieldset class="restButtons"> 
          <legend>Select a Method</legend>
          <div class="buttons">
            <button id="get" onChange={this.handleClick}>GET</button>
            <button id="post" onChange={this.handleClick}>POST</button>
            <button id="put" onChange={this.handleClick}>PUT</button>
            <button id="delete" onChange={this.handleClick}>DELETE</button>
          </div> 
        </fieldset>
        <fieldset id="results">
          <legend>Results</legend>
          <p>{ this.state.url }</p>
        </fieldset>
      </form>
      </>
    )
  };
};

  export default Form;