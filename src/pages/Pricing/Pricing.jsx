import BannerPage from '../../components/BannerPage';
import PriceCard from '../../components/Price/PriceCard';
import BannerPricing from '../../assets/images/banner-pricing.jpg';
import './Pricing.scss';

function Pricing() {
    return (
        <div className="pricing">
            <BannerPage
                name="30 days money back guarantee"
                title="No Extra Fees. Friendly Support"
                img={BannerPricing}
            />
            <div className="pricing-main">
                <div className=" price container">
                    <PriceCard />
                </div>
            </div>
        </div>
    );
}

export default Pricing;
