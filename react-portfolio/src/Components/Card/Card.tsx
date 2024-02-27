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
      
      <section className="card">
        <img className="card__pic" src={image_url} alt={title+","+subtitle} />
        <h1 className="card__title">{"> " + title + " - " + subtitle}</h1>
        <p className="card__description">{description}</p>
          <div className="card__logos">
          <a href={code_url} target="_blank" className="card__code">{"👩‍💻"}</a>
          <a href={preview_url} target="_blank" className="card__prev">🔍</a>
        </div>
      </section>
    )
  }
  export default Card;