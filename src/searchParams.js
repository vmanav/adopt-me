import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {

    // console.log("ANIMALS => ", ANIMALS);
    // console.log("state of location : ", location);

    const [location, setLocation] = useState("Seattle, WA");
    // const [animal, setAnimal] = useState("dog");
    // const [breed, setBreed] = useState("");
    // This is a Custom Hook 
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] =    

    return (
        <div className="search-params">
            <h1>{location}</h1>
            <form>
                <label htmlFor="location">
                    Location
            <input id="location" value={location} placeholder="Location" onChange={event => setLocation(event.target.value)} />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={event => setAnimal(event.target.value)}
                        onBlur={event => setAnimal(event.target.value)}
                    >
                        <option>All</option>
                        {
                            ANIMALS.map((singleAnimal) => {
                                return (
                                    <option key={singleAnimal} value={singleAnimal}>{singleAnimal}</option>
                                )
                            })
                        }
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={event => setBreed(event.target.value)}
                        onBlur={event => setBreed(event.target.value)}
                        disabled={breeds.length === 0}
                    // true if breeds.length is ZERO
                    >
                        <option>All</option>
                        {breeds.map((singleBreed) => {
                            return (
                                <option key={singleBreed} value={singleBreed}>{singleBreed}
                                    {singleBreed}
                                </option>
                            )
                        })}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;