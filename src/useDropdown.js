import React, { useState } from 'react';

// This is a kind of a Genric DropDown Component
const useDropdown = (label, defaultState, options) => {

    const [state, setState] = useState(defaultState);

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
                            <option key={item} value={item}></option>
                        )
                    })}
                </select>
            </label>
        );
    };

    return [state, Dropdown, setState];
};

export default useDropdown;