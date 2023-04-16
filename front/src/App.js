import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useEffect, useState} from 'react';
import Footer from "./statics/Footer";
import Nav from "./statics/Nav";
import Header from "./statics/Header";
import MainHome from "./pages/Main/MainHome";

import Profile from "./pages/profile/Profile";
import ProfileInsert from "./pages/profile/ProfileInsert";
import ProfileDetail from "./pages/profile/ProfileDetail";

import AllBookList from "./pages/book/AllBookList";
import NoticeMain from "./pages/notice/NoticeMain";
import NoticePage from "./pages/notice/NoticePage";
import NoticeInsert from "./pages/notice/NoticeInsert";
// import NoticeDetail from "./pages/notice/NoticeDetail";
// import NoticeUpdate from "./pages/notice/NoticeUpdate";
import BookmarkMain from "./pages/bookmark/BookmarkMain";
import BookMarkDetail from "./pages/bookmark/BookmarkDetail";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, BrowserRouter
} from 'react-router-dom';





function App() {
    const [isLogin, setIsLogin] = useState(false);
    function loginCallBack(login) {
        setIsLogin(login);
    }
    return (
        <BrowserRouter>
            <div className="App">
                <header>
                    <Header/>
                </header>
                <Nav/>
                <div className="contents">
                    <Switch>
                        {/* profile */}
                        <Route path="/profile/insert">
                            <ProfileInsert/>
                        </Route>
                        <Route path="/profile/detail">
                            <ProfileDetail/>
                        </Route>
                        <Route path="/profile/main">
                            <Profile/>
                        </Route>

                        {/* bookmark */}
                        <Route path = "/bookmark/list">
                            <BookmarkMain/>
                        </Route>
                        <Route path = "/bookmark/detail">
                            <BookMarkDetail/>
                        </Route>

                        {/* notice */}
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

                        {/* book */}
                        <Route path="/book/list">
                            <AllBookList/>
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