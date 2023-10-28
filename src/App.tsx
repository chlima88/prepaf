import { Activities, Login, Players } from "pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "global.css";

function App() {
    return (
        <div className="App relative flex flex-col items-center min-h-screen w-full">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/players" element={<Players />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
