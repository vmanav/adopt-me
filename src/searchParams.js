import React, { useState, useEffect, useContext } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './Results';
import ThemeContext from './ThemeContext';


const SearchParams = () => {

    // console.log("ANIMALS => ", ANIMALS);
    // ANIMALS => Array of Animals
    // console.log("state of location : ", location);
    const [location, setLocation] = useState("Seattle, WA");

    const [breeds, setBreeds] = useState([]);

    // This is a Custom Hook 
    // Initially Empty
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

    // This `pets` rerpesents set of pets we have got back from the API
    const [pets, setPets] = useState([]);

    // using theme ThemeContext
    const [theme, setTheme] = useContext(ThemeContext);

    // Asynchronus Function (Promise Returning)
    async function requestPets() {

        // Passing the `location`, `breed` and `type: animal` to the API for filtering searches
        const { animals } = await pet.animals({
            location,
            breed,
            type: animal
        });

        // set Pets using Hook
        setPets(animals || []);
    }

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

        // clear out exisitng Breeds
        setBreeds([]);
        setBreed("");

        pet.breeds(animal)
            .then((result) => {
                // console.log("result => ", result);
                // console.log("Promise ke Andar =>", breeds);
                let objectKiBreeds = result.breeds;
                const breedStrings = objectKiBreeds.map((breedObject) => breedObject.name);
                // setting Breeds
                setBreeds(breedStrings);
            }, error => console.error(error));
    }, [animal, setBreed, setBreeds]);
    // => we know that `setBreed` and `setBreeds` are functions and will not change, but still prser demnds them

    // => useEffect will re-render depend on changes with these
    // yaha pe vo angi jo use hui ho inside useEffect()
    // => Agar yaha pe[], emmpty dedi fir it will only run for the first time and not after that.

    return (
        <div className="search-params">
            <form onSubmit={(event) => {
                event.preventDefault();
                requestPets();
            }} >
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

                <label htmlFor="theme">
                    Theme
                    <select
                        value={theme}
                        onChange={event => setTheme(event.target.value)}
                        onBlur={event => setTheme(event.target.value)}

                    >
                        <option value="peru">Peru</option>
                        <option value="darkblue">Dark Blue</option>
                        <option value="chartreuse">Chartreuse</option>
                        <option value="mediumorchid">Medium Orchid</option>
                    </select>
                </label>

                <button style={{ backgroundColor: theme }}>Submit</button>
            </form>
            <Results pets={pets} />
        </div >
    );
};

export default SearchParams;

// Old Code for Animal Dropdown
{/*
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
</label> */
}

// Old Code for Breed Dropdown
{/* <label htmlFor="breed">
        Breed
        <select
            id="breed"
            value={breed}
            onChange={event => setBreed(event.target.value)}
            onBlur={event => setBreed(event.target.value)}
            disabled={breeds.length === 0} // true if breeds.length is ZERO
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
</label> */
}