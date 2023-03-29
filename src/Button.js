import './Button.css';

const Button = ({name, func}) => {

    return (
        <button className="Button" onClick={() => func()}>
            {name}
        </button>
    )
}

export default Button;