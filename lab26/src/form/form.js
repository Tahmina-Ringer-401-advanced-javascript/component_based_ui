import React from 'react';
import '../form/form.scss';
import Results from '../results/results';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      url: '',
      method: '',
      result: [],
      headers: []
    }
  }

  handleClick = e => {
    e.preventDefault();
    let method = e.target.name;
    this.setState({ method });
  };

  doSend = e => {
    e.preventDefault();
    this.getResults();
    this.setState({ display: true });
  }

  handleUrl = e => {
    let url = e.target.value;
    this.setState({url});
  }

  getResults = async (e) => {
    const url = this.state.url;
    const method = this.state.method;

    let headers = {};

    const result = await fetch(url, { method: method, mode: 'cors' })
      .then(res => {
        if (res.status === 200) {
          for (var pair of res.headers.entries()) {
            headers[pair[0]] = pair[1];
          }
          return res.json();
        } else {
          return;
        }
      });
    let resObject = {};
    resObject.count = Object.keys(result).length;
    resObject.result = result;

    this.setState({ result: resObject });
    this.setState({ headers: headers });
  }

  render() {
    return (
      <div id="form">
        <form>
          <label for="url">URL:</label>
          <input name="url" onBlur={this.handleUrl} />
          {(this.state.method && this.state.url) ? 
            <button name="GO" onClick={this.doSend}>GO!</button>
          : ''
          }
        </form>
        <div class="buttons">
          <legend>Select a Method</legend>
          <button name="get" onClick={this.handleClick}>GET</button>
          <button name="post" onClick={this.handleClick}>POST</button>
          <button name="put" onClick={this.handleClick}>PUT</button>
          <button name="delete" onClick={this.handleClick}>DELETE</button>
        </div>
        {!this.state.display ? "" :        
        <Results
          url={this.state.url}
          method={this.state.method}
          result={this.state.result}
          headers={this.state.headers}
        />
        }
      </div>
    )
  };
};

export default Form;