import Heading from '../Heading';
import './Team.scss';
import { team } from '../../assets/data/Data';
import Button from '../Button';

function Team() {
    return (
        <section className="team">
            <div className="container">
                <Heading
                    title="Our Featured Agents"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                />
                <div className="team-card">
                    {team.map((item, index) => (
                        <div className="team-item" key={index}>
                            <Button className="btn-team" noTitle rounded title={`${item.list} Listings`} />
                            <div className="details">
                                <div className="img">
                                    <img src={item.image} alt={item.name} />
                                    <i className="fa fa-circle-check"></i>
                                </div>
                                <div className="address">
                                    <i className="fa fa-location-dot"></i>
                                    <label>{item.address}</label>
                                </div>
                                <h4>{item.name}</h4>
                                <ul className="socials">
                                    {item.icon.map((icon, index) => (
                                        <li key={index}>{icon}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="contact">
                                <Button
                                    className="btn-mess"
                                    icon={<i className="fa fa-envelope"></i>}
                                    title="Message"
                                />
                                <Button className="btn-phone" icon={<i className="fa fa-phone-alt"></i>} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
