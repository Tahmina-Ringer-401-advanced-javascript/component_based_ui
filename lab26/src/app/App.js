import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Form from '../form/form';
import '../app/app.scss';

class App extends React.Component {
 
  render() {
    return(
      <div id="app">
      <Header />
      <Form />
      <Footer />
      </div>
    )
  };
};

export default App;
