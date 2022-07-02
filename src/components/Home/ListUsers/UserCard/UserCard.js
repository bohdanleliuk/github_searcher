import {Card} from "react-bootstrap";
import "./UserCard.css";
import {Link} from "react-router-dom";

const UserCard = ({user}) => {

    return (
        <Card>
            <Card.Body>
                <div className="card_container">
                    <div className="card_container_image_name">
                        <img src={user.avatar_url} width="100px"/>
                        <Link to={`/user/${user.login}`}>
                            <Card.Title>{user.login}</Card.Title>
                        </Link>
                    </div>
                    <Card.Title>Repo: {user.public_repos}</Card.Title>
                </div>
            </Card.Body>
        </Card>
    )
}

export default UserCard;