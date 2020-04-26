import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import { render } from 'react-dom';

const SearchParams = () => {

    // console.log("ANIMALS => ", ANIMALS);
    // ANIMALS => Array of Animals
    // console.log("state of location : ", location);
    const [location, setLocation] = useState("Seattle, WA");

    // This is a Custom Hook 
    const [breeds, setBreeds] = useState([]);
    // Initially Empty

    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

    // useEffect() is scheduling this function to run after the render happems
    // useEffect(() => {
    //     pet.breeds("dog")
    //         .then(console.log, console.error)
    // })
    // // => Why we do this ?
    // // doNotTrack;t slow down the first render
    // // Immeditialy show something to the screen
    // How we actually do this -->
    useEffect(() => {
        // clear out exisitng ones
        setBreeds([]);
        setBreed("");

        pet.breeds(animal)
            .then((result) => {
                // console.log("result => ", result);
                // console.log("Promise ke Andar =>", breeds);
                let objectKiBreeds = result.breeds;
                const breedStrings = objectKiBreeds.map((breedObject) => breedObject.name);
                setBreeds(breedStrings);
            }, error => console.error(error));
    }, [animal, setBreed, setBreeds]);
    // useEffect will re-render depend on changes with these
    // yaha pe vo angi jo use hui ho inside useEffect()
    // Agar yaha pe[], emmpty dedi fir infnite hota rahega, update pe render fir upadte fir render


    return (
        <div className="search-params">
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

                <AnimalDropdown />

                <BreedDropdown />

                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;