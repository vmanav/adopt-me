import React from 'react';
const Pet = ({ name, animal, breed, media, location, id }) => {
    // return React.createElement("div", {}, [
    //     React.createElement("h1", {}, name),
    //     React.createElement("h2", {}, animal),
    //     React.createElement("h2", {}, breed),
    // ]);
    // return (
    //     <div>
    //         <h1><i>Name : {name}</i></h1>
    //         <h2>Animal : {animal}</h2>
    //         <h2>Breed : {breed}</h2>
    //     </div>
    // )

    let hero = 'http://placecorgi.com/300/300';
    if (media.length) {
        hero = media[0].small;
    }

    return (
        <a href={`/details/${id}`} className="pet">
            <div className="image-container">
                <img src={hero} alt={name} />
            </div>
            <div className="info">
                <h1>{name}</h1>
                <h2>{`${animal} — ${breed} — ${location}`}</h2>
            </div>
        </a>
    );
};

export default Pet;