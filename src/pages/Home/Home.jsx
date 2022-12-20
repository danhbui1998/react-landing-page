import Awards from '../../components/Awards';
import Banner from '../../components/Banner';
import Featured from '../../components/Featured';
import Location from '../../components/Location';
import Price from '../../components/Price';
import Recent from '../../components/Recent';
import Team from '../../components/Team';
import './Home.scss';
function Home() {
    return (
        <div className="home">
            <Banner />
            <Featured />
            <Recent />
            <Awards />
            <Location />
            <Team />
            <Price />
        </div>
    );
}

export default Home;
