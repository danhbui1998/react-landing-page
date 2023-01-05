import { footer } from '../../assets/data/Data';
import Button from '../Button';
import footerLogo from '../../assets/images/logo-light.png';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <section className="footer-contact">
                <div className="container">
                    <div className="text">
                        <h2>Do You Have Questions ?</h2>
                        <p>We'll help you to grow your career and growth.</p>
                    </div>
                    <Button className="btn-contact" rounded title="Contact Us Today" />
                </div>
            </section>
            <div className="footer-main">
                <div className="container">
                    <div className="wrapper">
                        <div className="footer-box">
                            <div className="footer-logo">
                                <img src={footerLogo} alt="logo-light" />
                            </div>
                            <h2>Do You Need Help With Anything?</h2>
                            <p>
                                Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month
                            </p>
                            <div className="subscribe">
                                <input type="text" placeholder="Email Address" />
                                <Button noTitle className="btn-subscribe" title="Subscibe" />
                            </div>
                        </div>
                        {footer.map((item, index) => (
                            <div className="footer-box" key={index}>
                                <h3>{item.title}</h3>
                                <ul className="footer-menu">
                                    {item.text.map((item, index) => (
                                        <li key={index}>{item.list}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <span>© 2022 RentUP. Designd By DanhBui.</span>
            </div>
        </footer>
    );
}

export default Footer;
