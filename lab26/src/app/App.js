import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Form from '../form/form';
import '../app/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: []
    }
  }

updateHistory(newHistoryObj) {
  console.log("this.state.history___________", this.state.history);
  const history = [...this.state.history, newHistoryObj];
  this.setState({history});
}

  render() {
    // console.log("this.state.history", this.state.history)
    return(
      <div id="app">
        <Header />
        <Form 
        updateHistory = {this.updateHistory}
        />
        <Footer />
      </div>
    )
  };
};

export default App;
