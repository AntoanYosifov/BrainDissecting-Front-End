import logo from './assests/logo.svg';
import './App.css';
import Article from './components/Article';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/articles" element={<ArticlesPage />}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;
