import React, { Component } from 'react'
import styled from 'styled-components'
import Center from '../parts/Center';
import H1 from '../headers/H1';
import Par from './../parts/Paragraph';

import ReactDOM from 'react-dom';



const PageWrap = styled.div`
${({theme}) => theme.media.mobile} {
  width:100%;
  height:100%;
  padding:30px 0;
  
 }
 ${({theme}) => theme.media.tablet} {
  padding:150px 0;
 }
  
`;

export default class Contact extends Component {

  state = {
    content: null
  }
  componentDidMount = async() => {
    const Cosmic = require('cosmicjs')
    const api = Cosmic()
    const bucket = api.bucket({
     slug: process.env.REACT_APP_COSMIC_BUCKET || '894bf5b0-f845-11ea-bf0a-0f192059f564',
     read_key: process.env.REACT_APP_COSMIC_READ_KEY || '7b3J4wG3ywVyIzdlTXB53rqrSU2o6WU0nwh7lM6ZTElXcdyyHH'
    })
   
  }
  render() {
    console.log(this.state.content);
    
    return (
      <PageWrap>
        <Center>
          {this.state.content && <H1 isBig center>{this.state.content.title}</H1> }
          {this.state.content && <Par dangerouslySetInnerHTML={{__html:this.state.content.content}}></Par> }
          <H1 >Contact Me:</H1>

         
          <span>Created by: <a href="https://github.com/akichan89"> Autumn Shakespeare </a>
         </span>
         <hr/>
         
          </Center>
      </PageWrap>
    )
  }
  }
