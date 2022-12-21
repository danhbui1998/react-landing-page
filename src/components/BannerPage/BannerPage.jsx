import './BannerPage.scss';

function BannerPage({ name, title, img }) {
    return (
        <div className="banner-page" style={{ backgroundImage: `url(${img})` }}>
            <div className="container">
                <span>{name}</span>
                <h2>{title}</h2>
            </div>
            {/* <img src={img} alt="banner-page" /> */}
        </div>
    );
}

export default BannerPage;
