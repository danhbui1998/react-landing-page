import BannerPage from '../../components/BannerPage';
import FeaturedCard from '../../components/Featured/FeaturedCard';
import BannerService from '../../assets/images/banner-services.jpg';
import './Services.scss';

function Services() {
    return (
        <div className="services">
            <BannerPage name="Services" title="Services -All Services" img={BannerService} />
            <div className="services-main">
                <div className=" featured container">
                    <FeaturedCard />
                </div>
            </div>
        </div>
    );
}

export default Services;
