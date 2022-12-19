import Banner from '../../components/Banner';
import Featured from '../../components/Featured';
import './Home.scss';
function Home() {
    return (
        <div className="home">
            <Banner />
            <Featured />
        </div>
    );
}

export default Home;
