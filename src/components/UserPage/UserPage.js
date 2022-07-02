import "./UserPage.css";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const UserPage = () => {

    const {login} = useParams();

    const dispatch = useDispatch();

    const user = useSelector((state) => {
        const users = state.user.users;
        const res = users.find((user) => user.login === login)
        return res
    });

    return (
        <div>
            <Link to={'/'}>
                <div>Back</div>
            </Link>
            <div>Login: {user.login}</div>
            <div>Email: {user.email}</div>
            <div>Location: {user.location}</div>
            <div>Join Date: {user.created_at}</div>
            <div>Followers: {user.followers}</div>
            <div>Following: {user.following}</div>
        </div>
    )
}

export default UserPage;