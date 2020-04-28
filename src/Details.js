import React from 'react';
import pet from '@frontendmasters/pet';
import Caraousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';

class Details extends React.Component {

    // LEFT  OUT =>
    // Configuring bable for Parcel to make this work : `state = { loading: true }``

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        pet.animal(this.props.id)
            .then(({ animal }) => {

                this.setState(({
                    name: animal.name,
                    animal: animal.type,
                    location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
                    description: animal.description,
                    media: animal.photos,
                    breed: animal.breeds.primary,
                    loading: false
                }))
            }, console.error)
    }

    render() {
        if (this.state.loading) {
            return <h1>loading … </h1>;
        }

        // Destructuring
        const { animal, breed, location, description, media, name } = this.state;

        return (
            <div className="details">
                <Caraousel media={media} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} — ${breed} — ${location}`}</h2>

                    <ThemeContext.Consumer>
                        {/* {(themeHook) => (
                            <button style={{ backgroundColor: themeHook[0] }}>Adopt {name}</button>
                        )} */}
                        {/* Can Also be done by Destructuring teh Arry out of it :- */}
                        {([theme]) => (
                            <button style={{ backgroundColor: theme }}>Adopt {name}</button>
                        )}
                    </ThemeContext.Consumer>

                    <p>{description}</p>
                </div>
            </div>
        );
    }
}

export default function DetailsWithErrorBoundary(props) {
    return (
        // Error Boundary wraps up the full Deatisl Component
        < ErrorBoundary >
            <Details {...props} />
            {/* spread operator */}
        </ErrorBoundary >
    )
}