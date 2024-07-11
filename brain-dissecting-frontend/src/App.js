import logo from './assests/logo.svg';
import './App.css';
import Article from './components/Article';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Brain Dissecting</h1>
                <img src={logo} className="App-logo" alt="logo"/>
                <Article/>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React!
                </a>
            </header>
        </div>
    );
}

export default App;
