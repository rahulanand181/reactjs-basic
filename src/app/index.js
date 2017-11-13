import React from "react";
import { render } from 'react-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    render() {
        var user = {
            hobbies : "Gardening",
            favoritefood : [
                                {first:"noodles",second:"schezwan"},
                                {first:"samosa",second:"chutney"}
                            ]
            // favoritefood : ["noodles","samosa"]
        }
        return (
            <div>
                <Header/>
                <Home name={"rahul"} age={25} user={user}>
                    <p>This is paragraph.</p>
                </Home>
            </div>
        );
    }
}

render(
    <App />,
    document.getElementById('app')
);