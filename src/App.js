import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Secrets from './pages/Secrets';
import Me from './pages/Me';
import Login from './pages/Login';
import { UserProvider } from './contexts/UserContext';

class App extends Component {
    render() {
        return (
            <UserProvider>
                <div className="App">
                    <Header />
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/secrets" component={Secrets} />
                        <Route path="/me" component={Me} />
                        <Route path="/login" component={Login} />
                    </div>
                </div>
            </UserProvider>
        );
    }
}

export default App;
