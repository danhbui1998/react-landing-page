import BannerPage from '../../components/BannerPage';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import BannerAbout from '../../assets/images/banner-about.jpg';
import AboutImg from '../../assets/images/immio.jpg';

import './About.scss';
function About() {
    return (
        <div className="about">
            <BannerPage name="About Us" title="About Us - Who We Are?" img={BannerAbout} />
            <div className="about-main">
                <div className="container">
                    <div className="about-text">
                        <Heading title="Our Agency Story" subtitle="Check out our company story and work process" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip.
                        </p>
                        <Button rounded className="btn-about" title="More About Us" />
                    </div>
                    <div className="about-img">
                        <img src={AboutImg} alt="about-img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
