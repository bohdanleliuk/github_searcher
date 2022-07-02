import UserCard from "./UserCard/UserCard";
import "./ListUsers.css";
import {useSelector} from "react-redux";

const ListUsers = () => {

    const users = useSelector((state) => state.user.users);

    const listOfUsers = users.map((user) => {
        return (
                <UserCard key={user.id} user={user}/>
        )
    })

    return (
        <div className="ListUsers">
            {listOfUsers}
        </div>
    )
}

export default ListUsers;