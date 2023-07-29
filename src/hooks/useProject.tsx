import { createContext, useContext, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "../__generated__/gql";

const GET_PROJECTS = gql(`
  query GetProject($id: uuid!) {
    Project_by_pk(id: $id) {
      id
      hasuraPassword
      name
      postgresPassword
      userId
      domain
      provider {
        providers
      }
      providersid
    }
  }
`);

const ProjectContext = createContext<{
  project: {
    id: string;
    name: string;
    hasuraPassword: string;
    postgresPassword: string;
    userId: string;
    domain: string;
    provider: {
      providers: Record<string, any>;
    };
    providersid: string;
  };
}>({} as any);

export const ProjectProvider = ({
  children,
  projectId,
}: {
  children: any;
  projectId: string;
}) => {
  const { loading, error, data } = useQuery(GET_PROJECTS, {
    variables: {
      id: projectId,
    },
  });
  const value = useMemo(
    () => ({
      project: data?.Project_by_pk,
    }),
    [data?.Project_by_pk]
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <ProjectContext.Provider value={value as any}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  return useContext(ProjectContext);
};
