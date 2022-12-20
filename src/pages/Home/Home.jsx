import Awards from '../../components/Awards';
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
            <Awards />
        </div>
    );
}

export default Home;
