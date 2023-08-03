import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useProject } from "../../../../hooks/useProject";
import { gql } from "../../../../__generated__/gql";

const DeleteProject = gql(`
  mutation Delete($id: uuid!) {
    delete_Project_by_pk(id: $id) {
      id
    }
  }
`);

export const GeneralSettings = () => {
  const { project } = useProject();
  const navigate = useNavigate();
  const [deleteProject, { data, loading, error }] = useMutation(DeleteProject);

  return (
    <button
      onClick={async () => {
        await deleteProject({
          variables: {
            id: project.id,
          },
        });
        navigate("/dashboard/projects");
      }}
    >
      delete
    </button>
  );
};
