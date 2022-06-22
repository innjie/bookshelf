import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Footer from "./statics/Footer";
import Nav from "./statics/Nav";
import Header from "./statics/Header";
import Profile from "./pages/Profile";
import MainHome from "./pages/MainHome";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, BrowserRouter
} from 'react-router-dom';

function App() {
    const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get("/home")
            .then(response => setHello(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="row">
                    <Nav/>
                    <div className="contents">
                        <Switch>
                            <Route path="/view/profile">
                                <Profile/>
                            </Route>
                            <Route path="/">
                                <MainHome/>
                            </Route>
                        </Switch>
                    </div>
                    <Footer/>
                </div>


            </div>
        </BrowserRouter>
    );
}


export default App;