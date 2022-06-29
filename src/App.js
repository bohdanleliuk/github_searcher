import './App.css';
import {useEffect, useState} from "react";
import {Octokit} from "octokit";
import useDebounce from "./useDebounce";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";

function App() {

    const [nameForFind, setNameForFind] = useState('');

    const [foundUsers, setFoundUsers] = useState([]);

    const [isSearching, setIsSearching] = useState(false);

    const debouncedNameForFind = useDebounce(nameForFind, 2000);

    const octokit = new Octokit({
        auth: "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"
    })

    const findUsers = async (name) => {
        await octokit.request(`GET /search/users`, {
            q: `${name} in:login`,
            per_page: 50,
            page: 1,
            order: "desk"
        }).then((resp) => {
            setFoundUsers(resp.data.items)
            console.log(resp.data.items)
        })
    }

    useEffect(() => {
        if (debouncedNameForFind) {

            setIsSearching(true);
            findUsers(debouncedNameForFind).then(() => {
                setIsSearching(false);
            })

        } else {
            setFoundUsers([]);
        }
    }, [debouncedNameForFind])

  return (
    <div className="App">
        <h1>GitHub Searcher</h1>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home nameForFind={nameForFind} setNameForFind={setNameForFind} isSearching={isSearching} foundUsers={foundUsers}/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
