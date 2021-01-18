import React from 'react';
import { BrowserRouter, MemoryRouter, HashRouter} from 'react-router-dom'
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
      <BrowserRouter>
        <Header />
        <Form 
        updateHistory = {this.updateHistory}
        />
        <Footer />
      </BrowserRouter>
    )
  };
};

export default App;
