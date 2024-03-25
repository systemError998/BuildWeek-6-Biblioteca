import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";
  import {UsersListItem} from './UsersListItem'
   
  export function UsersList({users, getAllUsers}) {
    return (
      <Card className="w-96">
        <List>
          {users.map((user) => <UsersListItem key={user.id} user={user} getAllUsers={getAllUsers} />)}
        </List>
      </Card>
    );
  }