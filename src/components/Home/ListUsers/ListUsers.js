import UserCard from "./UserCard/UserCard";
import "./ListUsers.css";

const ListUsers = ({foundUsers}) => {

    const listOfUsers = foundUsers.map((user) => <UserCard key={user.id} user={user}/>)

    return (
        <div className="ListUsers">
            {listOfUsers}
        </div>
    )
}

export default ListUsers;