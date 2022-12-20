import Heading from '../Heading';
import { location } from '../../assets/data/Data';
import './Location.scss';

function Location() {
    return (
        <section className="location">
            <div className="container">
                <Heading
                    title="Explore By Location"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                />
                <div className="location-card">
                    {location.map((item, index) => (
                        <div className="location-item" key={index}>
                            <img src={item.image} alt={item.name} />
                            <div className="overlay">
                                <h4>{item.name}</h4>
                                <p>
                                    <label>{item.Villas}</label>
                                    <label>{item.Offices}</label>
                                    <label>{item.Apartments}</label>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Location;
