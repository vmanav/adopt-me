import React from 'react';
import ReactDOM from 'react-dom';
// import Pet from './Pet';
import SearchParams from './searchParams';

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

    return (
        <React.StrictMode>
            <div>
                <h1 id="thats my div">Adopt Me !</h1>
                <SearchParams />
            </div >
        </React.StrictMode>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));