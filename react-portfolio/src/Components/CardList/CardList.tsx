import "./CardList.scss"
import { ProjectType} from "../../types/types"
import Card from "../Card/Card";

type CardListProps ={
  projects:ProjectType[];
}

const CardList = ({projects}:CardListProps) => { 
  return ( 
    <div className="card-list">
       {projects.map((project) => (
        
      <Card key={project.id} project={project}/>
      
  ))}
  </div>
);
};
export default CardList;