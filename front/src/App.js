import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import footer from "./statics/footer";
import Nav from "./statics/Nav";
import Header from "./statics/Header";

function App() {
    const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get("/home")
            .then(response => setHello(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className = "App">
            <Header/>
            <div className="row">
                <Nav className = "container"></Nav>

            </div>

            <footer/>
        </div>
    );
}

export default App;