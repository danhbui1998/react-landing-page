import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faEnvelope, faLocationDot, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

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
                                    <FontAwesomeIcon icon={faCircleCheck} className="check-icon" />
                                </div>
                                <div className="address">
                                    <FontAwesomeIcon icon={faLocationDot} className="address-icon" />
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
                                    icon={<FontAwesomeIcon icon={faEnvelope} />}
                                    title="Message"
                                />
                                <Button className="btn-phone" icon={<FontAwesomeIcon icon={faPhoneAlt} />} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
