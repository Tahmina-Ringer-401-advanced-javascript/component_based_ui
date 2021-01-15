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
      headers: [],
      reqBody: {}
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
    this.props.updateHistory({method: this.state.method, url: this.state.method});
    this.setState({ display: true });
  }

  handleUrl = e => {
    let url = e.target.value;
    this.setState({url});
  }

  handleReqBody = e => {
    let newReqBody = e.target.value;
    this.setState({ reqBody: newReqBody });
  }

  getResults = async (e) => {
    const url = this.state.url;
    const method = this.state.method;
    let resHeaders = {};
    let reqHeaders = { "content-type": "application/json; charset=UTF-8" }
    let reqOptions;
    let reqBody = this.state.reqBody;

    switch (method) {
      case 'GET':
        reqOptions = { method: method, mode: 'cors'};
        break;
      case 'POST':
        reqOptions = { method: method, headers: reqHeaders, body: reqBody, mode: 'cors' };
        break;
      case 'PUT':
        reqOptions = { method: method, headers: reqHeaders, body: reqBody, mode: 'cors' };
        break;
      case 'DELETE':
        reqOptions = { method: method, mode: 'cors'};
        break;
      default:
        reqOptions = {};
        break;
      }


      console.log("url___________", url);
    const result = await fetch(url, reqOptions)
      .then(res => {
        if (res.status === 200) {
          for (var pair of res.headers.entries()) {
            resHeaders[pair[0]] = pair[1];
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
    this.setState({ headers: resHeaders });
  }

  render() {
    console.log('this.state.method++++++++++', this.state.method);
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
          <button name="GET" onClick={this.handleClick}>GET</button>
          <button name="POST" onClick={this.handleClick}>POST</button>
          <button name="PUT" onClick={this.handleClick}>PUT</button>
          <button name="DELETE" onClick={this.handleClick}>DELETE</button>
        </div>
          {(this.state.method === 'POST' || this.state.method === 'PUT') ?
          
          <fieldset id="reqBody">
            <legend> Request Body: </legend>
            <textarea name="reqBody" onBlur={this.handleReqBody}></textarea>
          </fieldset>
          : ""
          }
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