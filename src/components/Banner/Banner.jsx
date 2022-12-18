import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Banner.scss';
import Button from '../Button';
import Heading from '../Heading/Heading';

function Banner() {
    return (
        <div className="banner">
            <div className="container">
                <div className="banner-text">
                    <Heading
                        title="Search Your Next Home"
                        subtitle="Find new & featured property located in your local city."
                    />
                </div>

                <form className="banner-input" action="">
                    <div className="input-box">
                        <span>City/Street</span>
                        <input type="text" placeholder="Location" />
                    </div>
                    <div className="input-box">
                        <span>Property Type</span>
                        <input type="text" placeholder="Property Type" />
                    </div>
                    <div className="input-box">
                        <span>Price Range</span>
                        <input type="text" placeholder="Price Range" />
                    </div>
                    <div className="input-box">
                        <h4>Advance Filter</h4>
                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                            noTitle
                            className="btn-search"
                            icon={<FontAwesomeIcon icon={faSearch} />}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Banner;
