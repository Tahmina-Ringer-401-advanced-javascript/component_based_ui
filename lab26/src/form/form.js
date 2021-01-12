import React from 'react';
import './form/form.scss'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      url: 'http:/localhost:3001/',
      method: ''
    }
  }


  handleSubmit = e => {
    e.preventDefault();
    let newSubmit = e.target.url.value;
    this.setState({ url: newSubmit });

    if(this.state.method){ this.setState({ display: true })}
  }
  
  handleClick = e => {
    let method = e.target.name;
    this.setState({ method });

    if(this.state.url){ this.setState({ display: true })}
  };

  render() {
    return(
      <div id="form">
      <form onSubmit={this.handleSubmit}>
        <label for="url">URL:</label>
        <input type='text' name="url" onChange={this.handleInput}/>
        <button type='submit' onClick={this.handleClick}>GO!</button>
      </form>
        <div class="buttons" onClick={this.handleClic}>
        <legend>Select a Method</legend>
          <button name="get" >GET</button>
          <button name="post" >POST</button>
          <button name="put" >PUT</button>
          <button name="delete" >DELETE</button>
        </div> 
        {!this.state.display ? "" :
        <div id="results">
          <legend>Results</legend>
          <p>URL:{ this.state.url }</p>
          <p>METHOD:{ this.state.method }</p>
        </div>
        }
      </div>
    )
  };
};

  export default Form;