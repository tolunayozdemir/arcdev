import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './ui/Theme';
import Header from './layout/Header';
import Footer from './layout/Footer';
import LandingPage from './LandingPage';



function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} selectedIndex={selectedIndex} setValue={setValue} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path="/" render ={(props) => <LandingPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route exact path="/customsoftware" component={() => <div>Custom software</div>} />
          <Route exact path="/mobileapps" component={() => <div>mobile apps</div>} />
          <Route exact path="/webapps" component={() => <div>web sites</div>} />
          <Route exact path="/revolution" component={() => <div>revolution</div>} />
          <Route exact path="/about" component={() => <div>about</div>} />
          <Route exact path="/contact" component={() => <div>contact</div>} />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  )
}


export default App;
