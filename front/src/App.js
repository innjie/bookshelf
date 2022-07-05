import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useEffect, useState} from 'react';
import Footer from "./statics/Footer";
import Nav from "./statics/Nav";
import Header from "./statics/Header";
import Profile from "./pages/Profile";
import MainHome from "./pages/Main/MainHome";
import AllBookList from "./pages/AllBookList";
import NoticeMain from "./pages/notice/NoticeMain";
import NoticeDetail from "./pages/notice/NoticeDetail";
import NoticeInsert from "./pages/notice/NoticeInsert";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, BrowserRouter
} from 'react-router-dom';


function App() {
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
                        <Route path="/notice/list">
                            <NoticeMain/>
                        </Route>
                        <Route path="/notice/detail">
                            <NoticeDetail/>
                        </Route>
                        <Route path="/notice/insert">
                            <NoticeInsert/>
                        </Route>
                        <Route path="/">
                            <MainHome/>
                        </Route>

                    </Switch>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;