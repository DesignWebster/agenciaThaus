import './styles.css'

interface ButtonServicesProps{
    service: string;
}

function ButtonNavServices({service}: ButtonServicesProps){
    return(
        <button className='ButtonNavService'>{service}</button>
    );
}

export default ButtonNavServices;