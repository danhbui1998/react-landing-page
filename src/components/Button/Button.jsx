import './Button.scss';

function Button({ className, icon, title, rounded }) {
    const classes = `btn ${rounded ? 'rounded' : ''} ${className ? className : ''}`;
    return (
        <button className={classes}>
            <span className="btn-icon">{icon}</span>
            <span className="btn-title">{title}</span>
        </button>
    );
}

export default Button;
