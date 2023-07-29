import { useQuery } from "@apollo/client";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { gql } from "__generated__";

const getUsers = gql(`
query getUsers {
  getUsers(project: {projectId: "89a8f182-a964-470b-9d24-0602639269a7"}) {
    users {
      id
      metadata_public
      created_at
      schema_id
      schema_url
      state
      state_changed_at
      updated_at
      traits {
        email
        name {
          first
          last
        }
      }
      verifiable_addresses {
        id
        verified
        via
        value
        updated_at
        status
        created_at
      }
    }
  }
}

`);

export const UsersPage = () => {
  const { loading, error, data } = useQuery(getUsers);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>User Id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.getUsers?.users?.map((user) => (
              <TableRow
                key={user?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th">
                  {user?.traits?.email}
                </TableCell>
                <TableCell component="th" scope="row">
                  {user?.created_at}
                </TableCell>
                <TableCell component="th" scope="row">
                  {user?.state}
                </TableCell>
                <TableCell component="th" scope="row">
                  {user?.id}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <div>
        {data?.getUsers?.users?.map((user) => {
          return (
            <div>
              {user.traits.email}
              <div>{user.traits.name.first}</div>
              <div>{user.traits.name.last}</div>
            </div>
          );
        })}
      </div> */}
    </>
  );
};
