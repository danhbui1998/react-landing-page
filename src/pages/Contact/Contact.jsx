import BannerPage from '../../components/BannerPage';
import BannerContact from '../../assets/images/banner-pricing.jpg';
import Button from '../../components/Button';

import './Contact.scss';
function Contact() {
    return (
        <div className="contact">
            <BannerPage name="Contact Us" title="Get Helps & Friendly Support" img={BannerContact} />
            <div className="contact-main">
                <div className="container">
                    <form className="contact-form">
                        <h4>Fillup The Form</h4>
                        <div className="contact-input">
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="Subject" />
                            <textarea cols="30" rows="10"></textarea>
                        </div>
                        <Button noTitle className="btn-submit" title="Submit Request" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
