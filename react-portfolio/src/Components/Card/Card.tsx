import { ProjectType } from "../../types/types";
import "./Card.scss"

type CardProps = {
    project: ProjectType;
  };
  
  const Card = ({project}: CardProps) => {

    const{
      image_url, title, subtitle, code_url, preview_url, description
    } = project
   
    return (
      
      <div className="card">
        <img className="card__pic" src={image_url} alt={title+","+subtitle} />
        <h1 className="card__title">{"> " + title + " - " + subtitle}</h1>
        <p className="card__description">{description}</p>
        <div className="card__logos">
        <a href={code_url} className="card__code">{"👩‍💻 Code"}</a>
        <a href={preview_url} className="card__prev">🔍 Preview</a>
        </div></div>
    )
  }
  export default Card;