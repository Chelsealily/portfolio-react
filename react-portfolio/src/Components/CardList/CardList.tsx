import "./CardList.scss"
import { Link } from "react-router-dom";
import { ProjectType} from "../../types/types"
import Card from "../Card/Card";

type CardListProps ={
  projects:ProjectType[];
}

const CardList = ({projects}:CardListProps) => { 
  return ( 
    <div className="card-list">
       {projects.map((project) => (
        <Link key={project.id} to={`/project/${project.id}`}>
      <Card key={project.id} project={project}/>
       </Link>
  ))}
  </div>
);
};
export default CardList;