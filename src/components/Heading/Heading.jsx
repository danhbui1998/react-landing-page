import './Heading.scss';

function Heading({ title, subtitle }) {
    return (
        <div className="heading">
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
}

export default Heading;
