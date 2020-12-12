import './Key.css';

const Key = ({handleKeydown}) => {

    return(
            <li className="key" onKeyDown={handleKeydown}></li>
    )
}

export default Key;