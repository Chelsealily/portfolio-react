import { ProjectType } from "../../types/types";
import "./Card.scss"

type CardProps = {
    project: ProjectType;
  };
  
  const Card = ({project}: CardProps) => {

    const{
      image_url, title, subtitle, code_url, preview_url
    } = project
   
    return (
      
      <div className="card">
        <img className="card__pic" src={image_url} alt={title+","+subtitle} />
        <h1 className="card__title">{title}</h1>
        <p className="card__subtitle">{subtitle}</p>
        <a href={code_url} className="card__code">{"</>"}</a>
        <a href={preview_url} className="card__prev"></a>
        </div>
    );
  };
  export default Card;