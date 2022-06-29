import {Card} from "react-bootstrap";
import "./UserCard.css";

const UserCard = ({user}) => {

    return (
        <Card>
            <Card.Body>
                <div className="card_container">
                    <div className="card_container_image_name">
                        <img src={user.avatar_url} width="100px"/>
                        <Card.Title>{user.login}</Card.Title>
                    </div>
                    <Card.Title>Repo:50</Card.Title>
                </div>
            </Card.Body>
        </Card>
    )
}

export default UserCard;