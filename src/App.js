
import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './font-awesome-4.7.0/css/font-awesome.min.css';
import Layout from './layout/Layout';
import Wrap from './components/section/Wrap';
import Category from './components/section/Category';
import PartGrid from './components/section/PartGrid';
import ContactForm from './components/page/Contact';
import Single from './components/section/Single';
import Footer from './components/section/Footer';
import Center from './components/parts/Center';


class App extends Component {
  state = {
    category:null,
    hg:false
  }
  componentDidMount = async () => {
    const Cosmic = require('cosmicjs');
    const api = Cosmic();
    const bucket = api.bucket({
     slug: process.env.REACT_APP_COSMIC_BUCKET || '894bf5b0-f845-11ea-bf0a-0f192059f564',
     read_key: process.env.REACT_APP_COSMIC_READ_KEY || '7b3J4wG3ywVyIzdlTXB53rqrSU2o6WU0nwh7lM6ZTElXcdyyHH'
    })
    const data = await bucket.getObjects({
      type: 'categories'
    })
    this.setState({
      category: data.objects,
    })
    
}
     
  render() {
    console.log(this.state.category);
    return (
    <div className="App">
    <Layout>
    <BrowserRouter>
    <>
      <Wrap />
      <Switch>
        <Route path="/" exact render={(props) => <Category category={this.state.category}/>}/>  
        <Route path='/contact' exact component={ContactForm}  />
        <Route path='/img/:slug' component={Single} exact  />
        <Route path='/:slug' component={PartGrid} exact  />
      </Switch>
      </>
     </BrowserRouter>
     <Center fs> "Capturing Beauty, Creating Memories"</Center>
     <Footer/>
    </Layout>
     </div>
    );
  }
}

export default App;
