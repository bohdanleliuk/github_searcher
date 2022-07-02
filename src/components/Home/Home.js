import {Form, Spinner} from "react-bootstrap";
import "./Home.css";
import ListUsers from "./ListUsers/ListUsers";
import {setSearchTerm} from "../../features/user/userSlice";
import {useDispatch} from "react-redux";

const Home = ({searchTerm, loadingUsers}) => {

    const dispatch = useDispatch();

    return (
        <div className="Home">
            <div className="search">
                <Form.Control
                    placeholder="Search users on GitHub"
                    type="text" value={searchTerm}
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                />
                {loadingUsers && <Spinner animation="border" variant="primary" />}
            </div>
            <ListUsers/>
        </div>
    )
}

export default Home;