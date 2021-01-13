import React from 'react';
import ReactJson from 'react-json-view';

class Results extends React.Component {
  
  render(){
    return(
      <div id="results">
        <h3>Pokemon API Results</h3>
        <p>COUNT: { this.props.count}</p>
        <ReactJson src={this.props.pokemon} />
        <ReactJson src={this.props.headers} />
      </div>
    )
  }
}

export default Results;
