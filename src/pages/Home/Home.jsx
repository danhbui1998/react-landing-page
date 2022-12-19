import Banner from '../../components/Banner';
import Featured from '../../components/Featured';
import Recent from '../../components/Recent';
import './Home.scss';
function Home() {
    return (
        <div className="home">
            <Banner />
            <Featured />
            <Recent />
        </div>
    );
}

export default Home;
