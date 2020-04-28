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

    // This is a Custom Hook 
    const [breeds, setBreeds] = useState([]);
    // Initially Empty

    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

    // This`pets` rerpesents set f pets we have got back from the API
    const [pets, setPets] = useState([]);

    // using theme ThemeContext
    const [theme, setTheme] = useContext(ThemeContext);

    // Asynchronus Function (Promise Returning)
    async function requestPets() {
        const { animals } = await pet.animals({
            location,
            breed,
            type: animal
        });

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