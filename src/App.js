import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import UserPage from "./components/UserPage/UserPage";
import {useDispatch, useSelector} from "react-redux";
import useDebounce from "./hooks/useDebounce";
import {useEffect} from "react";
import {clearUsers, getUsers} from "./features/user/userSlice";

function App() {

    const searchTerm = useSelector((state) => state.user.searchTerm)

    const debouncedSearchTerm = useDebounce(searchTerm, 1000)

    const dispatch = useDispatch();

    const loadingUsers = useSelector((state) => state.user.loadingUsers)

    useEffect(() => {
        if (debouncedSearchTerm) {
            dispatch(getUsers(debouncedSearchTerm))
        }
    }, [debouncedSearchTerm])

    useEffect(() => {
        if (!searchTerm) {
            dispatch(clearUsers())
        }
    }, [searchTerm])

    return (
        <div className="App">
            <h1>GitHub Searcher</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home searchTerm={searchTerm} loadingUsers={loadingUsers} />}/>
                    <Route path="/user/:login" element={<UserPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
