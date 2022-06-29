import {Form, Spinner} from "react-bootstrap";
import "./Home.css";
import ListUsers from "./ListUsers/ListUsers";

const Home = (props) => {

    let {
        nameForFind,
        setNameForFind,
        isSearching,
        foundUsers
    } = props;

    return (
        <div className="Home">
            <div className="search">
                <Form.Control placeholder="Search users on GitHub" type="text" value={nameForFind} onChange={(e) => setNameForFind(e.target.value)}/>
                {isSearching && <Spinner animation="border" variant="primary" />}
            </div>
            <ListUsers foundUsers={foundUsers}/>
        </div>
    )
}

export default Home;