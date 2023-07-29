/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query GetProject($id: uuid!) {\n    Project_by_pk(id: $id) {\n      id\n      hasuraPassword\n      name\n      postgresPassword\n      userId\n      domain\n      provider {\n        providers\n      }\n      providersid\n    }\n  }\n": types.GetProjectDocument,
    "\n  mutation UpdateProviders($id: uuid!, $providers: jsonb!) {\n    update_providers_by_pk(pk_columns: {id: $id}, _set: {providers: $providers}) {\n      providers\n      id\n    }\n  }\n": types.UpdateProvidersDocument,
    "\nquery getUsers {\n  getUsers(project: {projectId: \"89a8f182-a964-470b-9d24-0602639269a7\"}) {\n    users {\n      id\n      metadata_public\n      created_at\n      schema_id\n      schema_url\n      state\n      state_changed_at\n      updated_at\n      traits {\n        email\n        name {\n          first\n          last\n        }\n      }\n      verifiable_addresses {\n        id\n        verified\n        via\n        value\n        updated_at\n        status\n        created_at\n      }\n    }\n  }\n}\n\n": types.GetUsersDocument,
    "\n  mutation Delete($id: uuid!) {\n    delete_Project_by_pk(id: $id) {\n      id\n    }\n  }\n": types.DeleteDocument,
    "\n  mutation AddProject($name: String!, $domain: String!, $type: String!) {\n    insert_Project_one(object: {provider: {data: {}}, name: $name, domain: $domain, type: $type, }) {\n      name\n      id\n      postgresPassword\n      hasuraPassword\n    }\n  }\n": types.AddProjectDocument,
    "\n  query ListProjects {\n    Project {\n      id\n      name\n    }\n  }\n": types.ListProjectsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProject($id: uuid!) {\n    Project_by_pk(id: $id) {\n      id\n      hasuraPassword\n      name\n      postgresPassword\n      userId\n      domain\n      provider {\n        providers\n      }\n      providersid\n    }\n  }\n"): (typeof documents)["\n  query GetProject($id: uuid!) {\n    Project_by_pk(id: $id) {\n      id\n      hasuraPassword\n      name\n      postgresPassword\n      userId\n      domain\n      provider {\n        providers\n      }\n      providersid\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateProviders($id: uuid!, $providers: jsonb!) {\n    update_providers_by_pk(pk_columns: {id: $id}, _set: {providers: $providers}) {\n      providers\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProviders($id: uuid!, $providers: jsonb!) {\n    update_providers_by_pk(pk_columns: {id: $id}, _set: {providers: $providers}) {\n      providers\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getUsers {\n  getUsers(project: {projectId: \"89a8f182-a964-470b-9d24-0602639269a7\"}) {\n    users {\n      id\n      metadata_public\n      created_at\n      schema_id\n      schema_url\n      state\n      state_changed_at\n      updated_at\n      traits {\n        email\n        name {\n          first\n          last\n        }\n      }\n      verifiable_addresses {\n        id\n        verified\n        via\n        value\n        updated_at\n        status\n        created_at\n      }\n    }\n  }\n}\n\n"): (typeof documents)["\nquery getUsers {\n  getUsers(project: {projectId: \"89a8f182-a964-470b-9d24-0602639269a7\"}) {\n    users {\n      id\n      metadata_public\n      created_at\n      schema_id\n      schema_url\n      state\n      state_changed_at\n      updated_at\n      traits {\n        email\n        name {\n          first\n          last\n        }\n      }\n      verifiable_addresses {\n        id\n        verified\n        via\n        value\n        updated_at\n        status\n        created_at\n      }\n    }\n  }\n}\n\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Delete($id: uuid!) {\n    delete_Project_by_pk(id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation Delete($id: uuid!) {\n    delete_Project_by_pk(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddProject($name: String!, $domain: String!, $type: String!) {\n    insert_Project_one(object: {provider: {data: {}}, name: $name, domain: $domain, type: $type, }) {\n      name\n      id\n      postgresPassword\n      hasuraPassword\n    }\n  }\n"): (typeof documents)["\n  mutation AddProject($name: String!, $domain: String!, $type: String!) {\n    insert_Project_one(object: {provider: {data: {}}, name: $name, domain: $domain, type: $type, }) {\n      name\n      id\n      postgresPassword\n      hasuraPassword\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ListProjects {\n    Project {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query ListProjects {\n    Project {\n      id\n      name\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;