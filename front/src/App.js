import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useEffect, useState} from 'react';
import Footer from "./statics/Footer";
import Nav from "./statics/Nav";
import Header from "./statics/Header";
import Profile from "./pages/Profile";
import MainHome from "./pages/Main/MainHome";
import AllBookList from "./pages/AllBookList";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, BrowserRouter
} from 'react-router-dom';

function App() {
    const [hello, setHello] = useState('')
    return (
        <BrowserRouter>
            <div className="App">
                <header>
                    <Header/>
                </header>
                <Nav/>
                <div className="contents">
                    <Switch>
                        <Route path="/book/list">
                            <AllBookList/>
                        </Route>
                        <Route path="/profile/main">
                            <Profile/>
                        </Route>
                        <Route path="/">
                            <MainHome/>
                        </Route>
                        <Route path = "/notice/list">
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}
export default App;