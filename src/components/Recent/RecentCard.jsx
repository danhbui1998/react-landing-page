import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { recents } from '../../assets/data/Data';
import Button from '../Button';

function RecentCard() {
    return (
        <div className="recent-card">
            {recents.map((item, index) => (
                <div className="recent-item" key={index}>
                    <div className="recent-img">
                        <img src={item.image} alt={item.type} />
                    </div>
                    <div className="recent-text">
                        <div className="category flex">
                            {item.category}
                            <div className="heart-icon">
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                        </div>
                        <h4>{item.name}</h4>
                        <p className="location">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>{item.location}</span>
                        </p>
                    </div>
                    <div className="recent-bottom flex">
                        <Button className="btn-price" rounded title={item.price} />
                        <span>{item.type}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RecentCard;
