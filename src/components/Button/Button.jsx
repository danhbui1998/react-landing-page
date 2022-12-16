import './Button.scss';

function Button({ className, icon, title, rounded, noTitle, onClick }) {
    const classes = `btn ${rounded ? 'rounded' : ''} ${className ? className : ''} ${noTitle ? 'no-title' : ''}`;
    return (
        <button onClick={onClick} className={classes}>
            <span className="btn-icon">{icon}</span>
            <span className="btn-title">{title}</span>
        </button>
    );
}

export default Button;
