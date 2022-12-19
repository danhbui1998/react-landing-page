import Heading from '../Heading';
import './Featured.scss';
import FeaturedCard from './FeaturedCard';

function Featured() {
    return (
        <section className="featured">
            <div className="container">
                <Heading title="Featured Property Types" subtitle="Find All Type of Property." />
                <FeaturedCard />
            </div>
        </section>
    );
}

export default Featured;
