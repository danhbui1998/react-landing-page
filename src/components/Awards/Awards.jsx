import { awards } from '../../assets/data/Data';
import Heading from '../Heading';
import './Awards.scss';
function Awards() {
    return (
        <section className="awards">
            <div className="container">
                <Heading
                    title="Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services"
                    subtitle="Our Awards"
                />
                <div className="awards-card">
                    {awards.map((item, index) => (
                        <div className="awards-item" key={index}>
                            <div className="icon">
                                <span>{item.icon}</span>
                            </div>
                            <h3>{item.num}</h3>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Awards;
