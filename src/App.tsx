import { Activities, Layout, Login, Players } from "pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "global.css";

function App() {
    return (
        <div className="App relative flex flex-col items-center w-screen min-h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route element={<Layout />}>
                        <Route path="/activities" element={<Activities />} />
                        <Route path="/players" element={<Players />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
