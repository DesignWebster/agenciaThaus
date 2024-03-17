import './styles.css'

interface CardProjectProps{
    fileImgUrl: string;
}

function CardProject({fileImgUrl}: CardProjectProps){
    return(
        <div className="cardProject">
            <img src={fileImgUrl} alt="" />
        </div>
    );
}

export default CardProject;