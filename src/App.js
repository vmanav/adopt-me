import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

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
        <div>
            <h1 id="thats my div">Adopt Me !</h1>
            <Pet name="Luna" animal="Dog" breed="havanese" />
            <Pet name="Pepper" animal="Bird" breed="Cocktiel" />
            <Pet name="Doink" animal="Cat" breed="Mized" />
        </div >
    )
};

ReactDOM.render(<App />, document.getElementById("root"));