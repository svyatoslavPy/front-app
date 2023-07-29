import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { gql } from "../../__generated__/gql";
import { ProjectItem } from "./project-item";

const GET_LIST_PROJECTS = gql(`
  query ListProjects {
    Project {
      id
      name
    }
  }
`);
export const ProjectList = () => {
  const { loading, error, data } = useQuery(GET_LIST_PROJECTS);
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);
  return (
    <div>
      Projects Page
      <button onClick={() => navigate("/dashboard/projects/create")}>
        create
      </button>
      {data?.Project.map((project) => (
        <ProjectItem project={project} />
      ))}
    </div>
  );
};
