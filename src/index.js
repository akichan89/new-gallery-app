import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/page/header';
import ContactForm from './components/page/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <Header />
          <ContactForm />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
