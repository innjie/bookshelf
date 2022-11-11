import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useEffect, useState} from 'react';
import Footer from "./statics/Footer";
import Nav from "./statics/Nav";
import Header from "./statics/Header";
import MainHome from "./pages/Main/MainHome";

import Profile from "./pages/profile/Profile";
import ProfileInsert from "./pages/profile/ProfileInsert";

import AllBookList from "./pages/book/AllBookList";
import NoticeMain from "./pages/notice/NoticeMain";
import NoticePage from "./pages/notice/NoticePage";
import NoticeInsert from "./pages/notice/NoticeInsert";
// import NoticeDetail from "./pages/notice/NoticeDetail";
// import NoticeUpdate from "./pages/notice/NoticeUpdate";


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
                        <Route path="/profile/insert">
                            <ProfileInsert/>
                        </Route>
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
                            <NoticePage/>
                        </Route>
                        {/* <Route path="/notice/update">
                            <NoticeUpdate/>
                        </Route> */}
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