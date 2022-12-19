import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Alevel from './components/pages/Alevel';
import Olevel from './components/pages/Olevel';
import Footer from './components/Footer';
import SchoolExam from './components/pages/SchoolExam';
import Professional from './components/pages/Professional';
import Login from './components/pages/Login';
import Bookalivedisplay from './components/chat/Bookalivedisplay';
import Community from './components/pages/Community';
import SearchPaper from './components/SearchPaper';
import Register from './components/pages/Register';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/olevel' component={Olevel} />
          <Route path='/alevel' component={Alevel} />
          <Route path='/sign-up' component={Register} />
          <Route path='/schoolexam' component={SchoolExam} />
          <Route path='/professional' component={Professional} />
          <Route path='/login' component={Login} />
          <Route path='/community' component={Community} />
          <Route path='/display-book' component={Bookalivedisplay} />
          <Route path='/search-papers' component={SearchPaper} />
          <Route path='/about' component={AboutUs} />
          <Route path='/contact' component={ContactUs} />
       
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;