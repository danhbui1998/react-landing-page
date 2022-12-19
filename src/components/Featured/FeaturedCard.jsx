import { featured } from '../../assets/data/Data';
import './Featured.scss';

function FeaturedCard() {
    return (
        <div className="featured-card">
            {featured.map((item, index) => (
                <div className="featured-item">
                    <img src={item.avatar} alt={item.name} />
                    <h4>{item.name}</h4>
                    <label>{item.total}</label>
                </div>
            ))}
        </div>
    );
}

export default FeaturedCard;
