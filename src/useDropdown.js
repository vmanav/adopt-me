import React, { useState } from 'react';

// This is a kind of a Genric DropDown Component with the use of Hooks
const useDropdown = (label, defaultState, options) => {

    // Creating Hook
    const [state, setState] = useState(defaultState);

    // Making a custom id for html element
    const id = `use-dropdown-${label.replace(" ", " ").toLowerCase()}`;

    const Dropdown = () => {
        return (
            <label htmlFor={id}>
                {label}
                <select
                    id={id}
                    value={state}
                    onChange={event => setState(event.target.value)}
                    onBlur={event => setState(event.target.value)}
                    disabled={options.length === 0}
                >
                    <option>All</option>
                    {options.map((item) => {
                        return (
                            <option key={item} value={item}>{item}</option>
                        )
                    })}
                </select>
            </label>
        );
    };

    // This Returns the `state`,` Dropdown Component` and a `setState function` to change the state
    return [state, Dropdown, setState];
};

export default useDropdown;