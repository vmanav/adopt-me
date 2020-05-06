import React from 'react';

class Caraousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            active: 0
        };

        // Binding to set`this` to the correct postion
        this.hanldeIndexClick = this.hanldeIndexClick.bind(this);
        // Method -2 
        // use ARROW functions, experimental class Syntax
    }

    static getDerivedStateFromProps({ media }) {
        let photos = ["http://placecorgi.com/600/600"];

        if (media.length) {
            // Just grabbing the LAGRGE photos, out of SMALL, MEDIUM and LARGE
            photos = media.map(({ large }) => large);
        }

        return { photos };
    }

    hanldeIndexClick(event) {
        this.setState({
            active: +event.target.dataset.index
        });
        // `+` for conversion to Int
        // Can aslo use `parseInt(str, BASE=10)`
    };

    render() {
        // getting from state
        const { photos, active } = this.state;

        return (
            <div className="carousel">
                <img src={photos[active]} alt="animal" />
                <div className="carousel-smaller">

                    {photos.map((photo, index) => {
                        return (
                            // eslint-disable-next-line
                            <img
                                key={photo}
                                onClick={this.hanldeIndexClick}
                                data-index={index}
                                src={photo}
                                alt="animal thumbnail"
                                className={index === active ? "active" : ""}
                            />
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default Caraousel