import { useState } from 'react';
import { price } from '../../assets/data/Data';
import Button from '../Button';

function PriceCard() {
    const [isPrice, setIsPrice] = useState(false);
    return (
        <div className="price-card">
            {price.map((item, index) => (
                <div className="price-item" key={index}>
                    {isPrice && <Button className="btn-top" rounded title="Best Value" />}
                    <h4>{item.plan}</h4>
                    <h3>
                        <span>$</span> {item.price}
                    </h3>
                    <p>{item.ptext}</p>
                    <ul className="price-menu">
                        {item.list.map((item, index) => (
                            <li key={index}>
                                <label>{item.icon}</label>
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                    <Button
                        onClick={() => {
                            setIsPrice(!isPrice);
                        }}
                        className={`btn-bottom ${isPrice ? '' : 'btn-not-active'}`}
                        rounded
                        title={`Start ${item.plan}`}
                    />
                </div>
            ))}
        </div>
    );
}

export default PriceCard;
