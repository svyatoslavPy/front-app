/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  uuid: any;
};

export type ChangeStatusUserInput = {
  status?: InputMaybe<Scalars["Boolean"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

export type ChangeStatusUserOutput = {
  __typename?: "ChangeStatusUserOutput";
  status?: Maybe<Scalars["Boolean"]>;
};

export type Name = {
  __typename?: "Name";
  first?: Maybe<Scalars["String"]>;
  last?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "Project" */
export type Project = {
  __typename?: "Project";
  domain: Scalars["String"];
  hasuraPassword: Scalars["uuid"];
  id: Scalars["uuid"];
  name: Scalars["String"];
  passwordhash: Scalars["uuid"];
  postgresPassword: Scalars["uuid"];
  /** An object relationship */
  provider: Providers;
  providersid: Scalars["uuid"];
  type: Scalars["String"];
  userId: Scalars["String"];
  version: Scalars["String"];
};

export type ProjectInput = {
  projectId: Scalars["String"];
};

/** aggregated selection of "Project" */
export type Project_Aggregate = {
  __typename?: "Project_aggregate";
  aggregate?: Maybe<Project_Aggregate_Fields>;
  nodes: Array<Project>;
};

/** aggregate fields of "Project" */
export type Project_Aggregate_Fields = {
  __typename?: "Project_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Project_Max_Fields>;
  min?: Maybe<Project_Min_Fields>;
};

/** aggregate fields of "Project" */
export type Project_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Project_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "Project". All fields are combined with a logical 'AND'. */
export type Project_Bool_Exp = {
  _and?: InputMaybe<Array<Project_Bool_Exp>>;
  _not?: InputMaybe<Project_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Bool_Exp>>;
  domain?: InputMaybe<String_Comparison_Exp>;
  hasuraPassword?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  passwordhash?: InputMaybe<Uuid_Comparison_Exp>;
  postgresPassword?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<Providers_Bool_Exp>;
  providersid?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
  version?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Project" */
export enum Project_Constraint {
  /** unique or primary key constraint on columns "name" */
  ProjectNameKey = "Project_name_key",
  /** unique or primary key constraint on columns "id" */
  ProjectPkey = "Project_pkey",
}

/** input type for inserting data into table "Project" */
export type Project_Insert_Input = {
  domain?: InputMaybe<Scalars["String"]>;
  hasuraPassword?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  name?: InputMaybe<Scalars["String"]>;
  passwordhash?: InputMaybe<Scalars["uuid"]>;
  postgresPassword?: InputMaybe<Scalars["uuid"]>;
  provider?: InputMaybe<Providers_Obj_Rel_Insert_Input>;
  providersid?: InputMaybe<Scalars["uuid"]>;
  type?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
  version?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Project_Max_Fields = {
  __typename?: "Project_max_fields";
  domain?: Maybe<Scalars["String"]>;
  hasuraPassword?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  passwordhash?: Maybe<Scalars["uuid"]>;
  postgresPassword?: Maybe<Scalars["uuid"]>;
  providersid?: Maybe<Scalars["uuid"]>;
  type?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Project_Min_Fields = {
  __typename?: "Project_min_fields";
  domain?: Maybe<Scalars["String"]>;
  hasuraPassword?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  passwordhash?: Maybe<Scalars["uuid"]>;
  postgresPassword?: Maybe<Scalars["uuid"]>;
  providersid?: Maybe<Scalars["uuid"]>;
  type?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "Project" */
export type Project_Mutation_Response = {
  __typename?: "Project_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Project>;
};

/** on_conflict condition type for table "Project" */
export type Project_On_Conflict = {
  constraint: Project_Constraint;
  update_columns?: Array<Project_Update_Column>;
  where?: InputMaybe<Project_Bool_Exp>;
};

/** Ordering options when selecting data from "Project". */
export type Project_Order_By = {
  domain?: InputMaybe<Order_By>;
  hasuraPassword?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  passwordhash?: InputMaybe<Order_By>;
  postgresPassword?: InputMaybe<Order_By>;
  provider?: InputMaybe<Providers_Order_By>;
  providersid?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Project */
export type Project_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** select columns of table "Project" */
export enum Project_Select_Column {
  /** column name */
  Domain = "domain",
  /** column name */
  HasuraPassword = "hasuraPassword",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Passwordhash = "passwordhash",
  /** column name */
  PostgresPassword = "postgresPassword",
  /** column name */
  Providersid = "providersid",
  /** column name */
  Type = "type",
  /** column name */
  UserId = "userId",
  /** column name */
  Version = "version",
}

/** input type for updating data in table "Project" */
export type Project_Set_Input = {
  domain?: InputMaybe<Scalars["String"]>;
  hasuraPassword?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  name?: InputMaybe<Scalars["String"]>;
  passwordhash?: InputMaybe<Scalars["uuid"]>;
  postgresPassword?: InputMaybe<Scalars["uuid"]>;
  providersid?: InputMaybe<Scalars["uuid"]>;
  type?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
  version?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "Project" */
export type Project_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Project_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Stream_Cursor_Value_Input = {
  domain?: InputMaybe<Scalars["String"]>;
  hasuraPassword?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  name?: InputMaybe<Scalars["String"]>;
  passwordhash?: InputMaybe<Scalars["uuid"]>;
  postgresPassword?: InputMaybe<Scalars["uuid"]>;
  providersid?: InputMaybe<Scalars["uuid"]>;
  type?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
  version?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "Project" */
export enum Project_Update_Column {
  /** column name */
  Domain = "domain",
  /** column name */
  HasuraPassword = "hasuraPassword",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Passwordhash = "passwordhash",
  /** column name */
  PostgresPassword = "postgresPassword",
  /** column name */
  Providersid = "providersid",
  /** column name */
  Type = "type",
  /** column name */
  UserId = "userId",
  /** column name */
  Version = "version",
}

export type Project_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Project_Set_Input>;
  where: Project_Bool_Exp;
};

export type RecoveryAddresses = {
  __typename?: "RecoveryAddresses";
  created_at?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
  via?: Maybe<Scalars["String"]>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
};

export type Traits = {
  __typename?: "Traits";
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Name>;
};

export type User = {
  __typename?: "User";
  created_at?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  metadata_public?: Maybe<Scalars["String"]>;
  recovery_addresses?: Maybe<Array<Maybe<RecoveryAddresses>>>;
  schema_id?: Maybe<Scalars["String"]>;
  schema_url?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  state_changed_at?: Maybe<Scalars["String"]>;
  traits?: Maybe<Traits>;
  updated_at?: Maybe<Scalars["String"]>;
  verifiable_addresses?: Maybe<Array<Maybe<VerifiableAddresses>>>;
};

export type Users = {
  __typename?: "Users";
  users?: Maybe<Array<Maybe<User>>>;
};

export type VerifiableAddresses = {
  __typename?: "VerifiableAddresses";
  created_at?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
  verified?: Maybe<Scalars["Boolean"]>;
  via?: Maybe<Scalars["String"]>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars["jsonb"]>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars["jsonb"]>;
  _eq?: InputMaybe<Scalars["jsonb"]>;
  _gt?: InputMaybe<Scalars["jsonb"]>;
  _gte?: InputMaybe<Scalars["jsonb"]>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars["String"]>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars["String"]>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars["String"]>>;
  _in?: InputMaybe<Array<Scalars["jsonb"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["jsonb"]>;
  _lte?: InputMaybe<Scalars["jsonb"]>;
  _neq?: InputMaybe<Scalars["jsonb"]>;
  _nin?: InputMaybe<Array<Scalars["jsonb"]>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** changeStatusUser */
  changeStatusUser?: Maybe<ChangeStatusUserOutput>;
  /** delete data from the table: "Project" */
  delete_Project?: Maybe<Project_Mutation_Response>;
  /** delete single row from the table: "Project" */
  delete_Project_by_pk?: Maybe<Project>;
  /** delete data from the table: "providers" */
  delete_providers?: Maybe<Providers_Mutation_Response>;
  /** delete single row from the table: "providers" */
  delete_providers_by_pk?: Maybe<Providers>;
  /** insert data into the table: "Project" */
  insert_Project?: Maybe<Project_Mutation_Response>;
  /** insert a single row into the table: "Project" */
  insert_Project_one?: Maybe<Project>;
  /** insert data into the table: "providers" */
  insert_providers?: Maybe<Providers_Mutation_Response>;
  /** insert a single row into the table: "providers" */
  insert_providers_one?: Maybe<Providers>;
  /** update data of the table: "Project" */
  update_Project?: Maybe<Project_Mutation_Response>;
  /** update single row of the table: "Project" */
  update_Project_by_pk?: Maybe<Project>;
  /** update multiples rows of table: "Project" */
  update_Project_many?: Maybe<Array<Maybe<Project_Mutation_Response>>>;
  /** update data of the table: "providers" */
  update_providers?: Maybe<Providers_Mutation_Response>;
  /** update single row of the table: "providers" */
  update_providers_by_pk?: Maybe<Providers>;
  /** update multiples rows of table: "providers" */
  update_providers_many?: Maybe<Array<Maybe<Providers_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootChangeStatusUserArgs = {
  params: ChangeStatusUserInput;
  project: ProjectInput;
};

/** mutation root */
export type Mutation_RootDelete_ProjectArgs = {
  where: Project_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Project_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDelete_ProvidersArgs = {
  where: Providers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Providers_By_PkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootInsert_ProjectArgs = {
  objects: Array<Project_Insert_Input>;
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Project_OneArgs = {
  object: Project_Insert_Input;
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ProvidersArgs = {
  objects: Array<Providers_Insert_Input>;
  on_conflict?: InputMaybe<Providers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Providers_OneArgs = {
  object: Providers_Insert_Input;
  on_conflict?: InputMaybe<Providers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_ProjectArgs = {
  _set?: InputMaybe<Project_Set_Input>;
  where: Project_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Project_By_PkArgs = {
  _set?: InputMaybe<Project_Set_Input>;
  pk_columns: Project_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Project_ManyArgs = {
  updates: Array<Project_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ProvidersArgs = {
  _append?: InputMaybe<Providers_Append_Input>;
  _delete_at_path?: InputMaybe<Providers_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Providers_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Providers_Delete_Key_Input>;
  _prepend?: InputMaybe<Providers_Prepend_Input>;
  _set?: InputMaybe<Providers_Set_Input>;
  where: Providers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Providers_By_PkArgs = {
  _append?: InputMaybe<Providers_Append_Input>;
  _delete_at_path?: InputMaybe<Providers_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Providers_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Providers_Delete_Key_Input>;
  _prepend?: InputMaybe<Providers_Prepend_Input>;
  _set?: InputMaybe<Providers_Set_Input>;
  pk_columns: Providers_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Providers_ManyArgs = {
  updates: Array<Providers_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "providers" */
export type Providers = {
  __typename?: "providers";
  id: Scalars["uuid"];
  providers: Scalars["jsonb"];
  userId: Scalars["String"];
};

/** columns and relationships of "providers" */
export type ProvidersProvidersArgs = {
  path?: InputMaybe<Scalars["String"]>;
};

/** aggregated selection of "providers" */
export type Providers_Aggregate = {
  __typename?: "providers_aggregate";
  aggregate?: Maybe<Providers_Aggregate_Fields>;
  nodes: Array<Providers>;
};

/** aggregate fields of "providers" */
export type Providers_Aggregate_Fields = {
  __typename?: "providers_aggregate_fields";
  count: Scalars["Int"];
  max?: Maybe<Providers_Max_Fields>;
  min?: Maybe<Providers_Min_Fields>;
};

/** aggregate fields of "providers" */
export type Providers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Providers_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Providers_Append_Input = {
  providers?: InputMaybe<Scalars["jsonb"]>;
};

/** Boolean expression to filter rows from the table "providers". All fields are combined with a logical 'AND'. */
export type Providers_Bool_Exp = {
  _and?: InputMaybe<Array<Providers_Bool_Exp>>;
  _not?: InputMaybe<Providers_Bool_Exp>;
  _or?: InputMaybe<Array<Providers_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  providers?: InputMaybe<Jsonb_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "providers" */
export enum Providers_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = "providers_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Providers_Delete_At_Path_Input = {
  providers?: InputMaybe<Array<Scalars["String"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Providers_Delete_Elem_Input = {
  providers?: InputMaybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Providers_Delete_Key_Input = {
  providers?: InputMaybe<Scalars["String"]>;
};

/** input type for inserting data into table "providers" */
export type Providers_Insert_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  providers?: InputMaybe<Scalars["jsonb"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Providers_Max_Fields = {
  __typename?: "providers_max_fields";
  id?: Maybe<Scalars["uuid"]>;
  userId?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Providers_Min_Fields = {
  __typename?: "providers_min_fields";
  id?: Maybe<Scalars["uuid"]>;
  userId?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "providers" */
export type Providers_Mutation_Response = {
  __typename?: "providers_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Providers>;
};

/** input type for inserting object relation for remote table "providers" */
export type Providers_Obj_Rel_Insert_Input = {
  data: Providers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Providers_On_Conflict>;
};

/** on_conflict condition type for table "providers" */
export type Providers_On_Conflict = {
  constraint: Providers_Constraint;
  update_columns?: Array<Providers_Update_Column>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "providers". */
export type Providers_Order_By = {
  id?: InputMaybe<Order_By>;
  providers?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: providers */
export type Providers_Pk_Columns_Input = {
  id: Scalars["uuid"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Providers_Prepend_Input = {
  providers?: InputMaybe<Scalars["jsonb"]>;
};

/** select columns of table "providers" */
export enum Providers_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Providers = "providers",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "providers" */
export type Providers_Set_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  providers?: InputMaybe<Scalars["jsonb"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "providers" */
export type Providers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Providers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Providers_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars["uuid"]>;
  providers?: InputMaybe<Scalars["jsonb"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "providers" */
export enum Providers_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Providers = "providers",
  /** column name */
  UserId = "userId",
}

export type Providers_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Providers_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Providers_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Providers_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Providers_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Providers_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Providers_Set_Input>;
  where: Providers_Bool_Exp;
};

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "Project" */
  Project: Array<Project>;
  /** fetch aggregated fields from the table: "Project" */
  Project_aggregate: Project_Aggregate;
  /** fetch data from the table: "Project" using primary key columns */
  Project_by_pk?: Maybe<Project>;
  /** getUsers */
  getUsers?: Maybe<Users>;
  /** fetch data from the table: "providers" */
  providers: Array<Providers>;
  /** fetch aggregated fields from the table: "providers" */
  providers_aggregate: Providers_Aggregate;
  /** fetch data from the table: "providers" using primary key columns */
  providers_by_pk?: Maybe<Providers>;
};

export type Query_RootProjectArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Query_RootProject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Query_RootProject_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootGetUsersArgs = {
  project: ProjectInput;
};

export type Query_RootProvidersArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

export type Query_RootProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

export type Query_RootProviders_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "Project" */
  Project: Array<Project>;
  /** fetch aggregated fields from the table: "Project" */
  Project_aggregate: Project_Aggregate;
  /** fetch data from the table: "Project" using primary key columns */
  Project_by_pk?: Maybe<Project>;
  /** fetch data from the table in a streaming manner: "Project" */
  Project_stream: Array<Project>;
  /** fetch data from the table: "providers" */
  providers: Array<Providers>;
  /** fetch aggregated fields from the table: "providers" */
  providers_aggregate: Providers_Aggregate;
  /** fetch data from the table: "providers" using primary key columns */
  providers_by_pk?: Maybe<Providers>;
  /** fetch data from the table in a streaming manner: "providers" */
  providers_stream: Array<Providers>;
};

export type Subscription_RootProjectArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Subscription_RootProject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Subscription_RootProject_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootProject_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Project_Stream_Cursor_Input>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

export type Subscription_RootProvidersArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

export type Subscription_RootProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Providers_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Providers_Order_By>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

export type Subscription_RootProviders_By_PkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootProviders_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Providers_Stream_Cursor_Input>>;
  where?: InputMaybe<Providers_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["uuid"]>;
  _gt?: InputMaybe<Scalars["uuid"]>;
  _gte?: InputMaybe<Scalars["uuid"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["uuid"]>;
  _lte?: InputMaybe<Scalars["uuid"]>;
  _neq?: InputMaybe<Scalars["uuid"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]>>;
};

export type GetProjectQueryVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type GetProjectQuery = {
  __typename?: "query_root";
  Project_by_pk?: {
    __typename?: "Project";
    id: any;
    hasuraPassword: any;
    name: string;
    postgresPassword: any;
    userId: string;
    domain: string;
    providersid: any;
    provider: { __typename?: "providers"; providers: any };
  } | null;
};

export type UpdateProvidersMutationVariables = Exact<{
  id: Scalars["uuid"];
  providers: Scalars["jsonb"];
}>;

export type UpdateProvidersMutation = {
  __typename?: "mutation_root";
  update_providers_by_pk?: {
    __typename?: "providers";
    providers: any;
    id: any;
  } | null;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: "query_root";
  getUsers?: {
    __typename?: "Users";
    users?: Array<{
      __typename?: "User";
      id?: string | null;
      metadata_public?: string | null;
      created_at?: string | null;
      schema_id?: string | null;
      schema_url?: string | null;
      state?: string | null;
      state_changed_at?: string | null;
      updated_at?: string | null;
      traits?: {
        __typename?: "Traits";
        email?: string | null;
        name?: {
          __typename?: "Name";
          first?: string | null;
          last?: string | null;
        } | null;
      } | null;
      verifiable_addresses?: Array<{
        __typename?: "VerifiableAddresses";
        id?: string | null;
        verified?: boolean | null;
        via?: string | null;
        value?: string | null;
        updated_at?: string | null;
        status?: string | null;
        created_at?: string | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type DeleteMutationVariables = Exact<{
  id: Scalars["uuid"];
}>;

export type DeleteMutation = {
  __typename?: "mutation_root";
  delete_Project_by_pk?: { __typename?: "Project"; id: any } | null;
};

export type AddProjectMutationVariables = Exact<{
  name: Scalars["String"];
  domain: Scalars["String"];
  type: Scalars["String"];
}>;

export type AddProjectMutation = {
  __typename?: "mutation_root";
  insert_Project_one?: {
    __typename?: "Project";
    name: string;
    id: any;
    postgresPassword: any;
    hasuraPassword: any;
  } | null;
};

export type ListProjectsQueryVariables = Exact<{ [key: string]: never }>;

export type ListProjectsQuery = {
  __typename?: "query_root";
  Project: Array<{ __typename?: "Project"; id: any; name: string }>;
};

export const GetProjectDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetProject" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "Project_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "hasuraPassword" },
                },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "postgresPassword" },
                },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                { kind: "Field", name: { kind: "Name", value: "domain" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "provider" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "providers" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "providersid" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProjectQuery, GetProjectQueryVariables>;
export const UpdateProvidersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateProviders" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "providers" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "jsonb" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "update_providers_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pk_columns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "providers" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "providers" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "providers" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateProvidersMutation,
  UpdateProvidersMutationVariables
>;
export const GetUsersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getUsers" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getUsers" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "project" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "projectId" },
                      value: {
                        kind: "StringValue",
                        value: "89a8f182-a964-470b-9d24-0602639269a7",
                        block: false,
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "users" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "metadata_public" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "created_at" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "schema_id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "schema_url" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "state" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "state_changed_at" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updated_at" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "traits" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "email" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "first" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "last" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "verifiable_addresses" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "verified" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "via" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updated_at" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "created_at" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const DeleteDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "Delete" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "delete_Project_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteMutation, DeleteMutationVariables>;
export const AddProjectDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddProject" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "domain" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "type" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_Project_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "provider" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "data" },
                            value: { kind: "ObjectValue", fields: [] },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "name" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "domain" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "domain" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "type" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "type" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "postgresPassword" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "hasuraPassword" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddProjectMutation, AddProjectMutationVariables>;
export const ListProjectsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ListProjects" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "Project" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListProjectsQuery, ListProjectsQueryVariables>;
