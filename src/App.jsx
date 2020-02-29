import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import ContentWrapper from './Components/Content/ContentWrapper.jsx';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";

const App = (props) => {

  return (
    <div className="app">
      <BrowserRouter>
        <Provider store={props.store}>
          <Header/>
          <NavBar/>
          <ContentWrapper contentWrapper={props.store.getState()} dispatch={props.dispatch}/>
          <Footer/>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
