import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectType } from "../../types/types";

type ProjectDetailsProps = {
  projects: ProjectType[];
};

const IdPage: React.FC<ProjectDetailsProps> = ({ projects }) => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<ProjectType | undefined>(undefined);

  // Find the project with the matching id
  useEffect(() => {
    const foundProject = projects.find((project) => project.id === Number(projectId));
    setProject(foundProject);
  }, [projectId, projects]);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="project-details">
      <h2>Project Details</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Owner</th>
            {/* Add more table headings here if needed */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{project.id}</td>
            <td>{project.title}</td>
            <td>{project.description}</td>
            {/* Add more table cells here if needed */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IdPage;
