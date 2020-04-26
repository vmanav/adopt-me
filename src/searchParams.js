import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {

    // console.log("ANIMALS => ", ANIMALS);
    // console.log("state of location : ", location);

    const [location, setLocation] = useState("Seattle, WA");
    // const [animal, setAnimal] = useState("dog");
    // const [breed, setBreed] = useState("");
    const [animal, AnimalDropDown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropDown] = useDropdown("Breed", "", breeds);

    // This is a Custom Hook 
    const [breeds, setBreeds] = useState([]); // InitiallyEmpty
    // const [animal, AnimalDropdown] =    

    return (
        <div className="search-params">
            <h1>{location}</h1>
            <form>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="Location"
                        onChange={event => setLocation(event.target.value)}
                    />
                </label>

                <AnimalDropDown />

                <BreedDropDown />

                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;