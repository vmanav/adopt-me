import React from 'react';
import Pet from './Pet';
const Results = ({ pets }) => {

    // console.log("pets in Result.js => ", pets);

    return (
        <div className="search">
            {pets.length === 0 ? (<h1>No Pets Found !</h1>) : (
                pets.map((singelPet) => {
                    return (
                        <Pet
                            animal={singelPet.type}
                            key={singelPet.id}
                            name={singelPet.name}
                            breed={singelPet.breeds.primary}
                            media={singelPet.photos}
                            location={`${singelPet.contact.address.city}, ${singelPet.contact.address.state}`}
                            id={singelPet.id}
                        />
                    )
                })
            )}
        </div>
    );
};

export default Results;