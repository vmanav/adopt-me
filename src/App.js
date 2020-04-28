import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import Pet from './Pet';
// We are using the REACH Router
import { Router, Link } from "@reach/router";
import SearchParams from './searchParams';
import Details from './Details';
import ThemeContext from './ThemeContext';


const App = () => {

    // return React.createElement(
    //     "div",
    //     {
    //         id: "thats my div",
    //     },
    //     [
    //         React.createElement("h1", {}, "Adopt Me !"),
    //         React.createElement(Pet, {
    //             name: "Luna",
    //             animal: "Dog",
    //             breed: "havanese ",
    //         }),
    //         React.createElement(Pet, {
    //             name: "Pepper",
    //             animal: "Bird",
    //             breed: "Cocktiel ",
    //         }),
    //         React.createElement(Pet, {
    //             name: "Doink",
    //             animal: "Cat",
    //             breed: "Mized ",
    //         }),
    //     ]
    // );

    // Configuting Theme Hook
    const themeHook = useState('blue');


    return (
        <React.StrictMode>
            <ThemeContext.Provider value={themeHook}>
                <div>
                    <header>
                        <Link to="/">Adopt Me !</Link>
                    </header>
                    <Router>
                        <SearchParams path="/" />
                        <Details path="/details/:id" />
                    </Router>
                </div >
            </ThemeContext.Provider>
        </React.StrictMode >
    )
};

ReactDOM.render(<App />, document.getElementById("root"));