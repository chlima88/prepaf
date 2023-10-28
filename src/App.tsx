import { Activities, Players } from "pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "global.css";

function App() {
    return (
        <div className="App relative h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Activities />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/players" element={<Players />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
