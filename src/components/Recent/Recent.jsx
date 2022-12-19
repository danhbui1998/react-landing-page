import Heading from '../Heading';
import RecentCard from './RecentCard';
import './Recent.scss';

function Recent() {
    return (
        <section className="recent">
            <div className="container">
                <Heading
                    title="Recent Property Listed"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                />
                <RecentCard />
            </div>
        </section>
    );
}

export default Recent;
