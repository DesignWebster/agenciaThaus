import './styles.css'
import arrowUP from '/icons/arrowUp.svg'

function ButtonRounded(){
    return(
        <button className='buttonUpArrow'>
            <img src={arrowUP} alt="" />
        </button>
    );
}

export default ButtonRounded;