import './styles.css'

interface CardProjectProps{
    fileImgUrl: string;
}

function CardProject({fileImgUrl}: CardProjectProps){
    return(
        <div className="cardProject">
            <img src={fileImgUrl} alt="" className='imageCardCap'/>
        </div>
    );
}

export default CardProject;