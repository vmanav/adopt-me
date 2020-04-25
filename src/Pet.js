import React from 'react';
const Pet = ({ name, animal, breed }) => {
    // return React.createElement("div", {}, [
    //     React.createElement("h1", {}, name),
    //     React.createElement("h2", {}, animal),
    //     React.createElement("h2", {}, breed),
    // ]);
    return (
        <div>
            <h1><i>Name : {name}</i></h1>
            <h2>Animal : {animal}</h2>
            <h2>Breed : {breed}</h2>
        </div>
    )
};

export default Pet;