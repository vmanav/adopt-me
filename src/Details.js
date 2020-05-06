import React from 'react';
import pet from '@frontendmasters/pet';
import { navigate } from '@reach/router';
import Modal from './Modal';
import Caraousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';

class Details extends React.Component {

    // LEFT  OUT :
    // => Configuring bable for Parcel to make this work : `state = { loading: true }``

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            showModal: false
        }

        // Binding Functions
        this.toggleModal = this.toggleModal.bind(this);
        this.adopt = this.adopt.bind(this);
    }


    // jo path ki id hai vo props me ajati hai
    componentDidMount() {
        pet.animal(this.props.id)
            .then(({ animal }) => {

                this.setState(({
                    url: animal.url,
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

    // Toogling Modal
    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    adopt() {
        // To Navigate to the petfinder website
        navigate(this.state.url);
    }

    render() {
        if (this.state.loading) {
            return <h1>loading … </h1>;
        }

        // Destructuring
        const { animal, breed, location, description, media, name, showModal } = this.state;

        // console.log("State of Modal before render", this.state.showModal);

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
                            <button
                                onClick={this.toggleModal}
                                style={{ backgroundColor: theme }}
                            >
                                Adopt {name}
                            </button>
                        )}
                    </ThemeContext.Consumer>

                    <p>{description}</p>
                    {
                        showModal ? (
                            <Modal>
                                <div>
                                    <h1>Would you like to adopt {name} ?</h1>
                                    <div className="buttons">
                                        <button onClick={this.adopt}>Yes</button>
                                        <button onClick={this.toggleModal}>No, I am a monster.</button>
                                    </div>
                                </div>
                            </Modal>
                        ) : null
                    }
                </div>
            </div>
        );
    }
}

export default function DetailsWithErrorBoundary(props) {
    // console.log("CONFUSION KI JAGA PE PROPS => ", props);
    return (
        // Error Boundary wraps up the full Deatisl Component
        < ErrorBoundary >
            <Details {...props} />
            {/* spread operator */}
        </ErrorBoundary >
    )
}