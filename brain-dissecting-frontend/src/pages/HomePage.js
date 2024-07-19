import React from "react";
import '../styles/home-page.css';
const HomePage = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Brain Dissecting</h1>
                <p>Your source for the latest research and articles on the human brain, psychology and life.</p>
                <nav>
                    <ul>
                        <li><a href="/articles">View Articles</a></li>
                    </ul>
                </nav>
            </header>
            <section className="home-content">
                <h2>Explore our latest articles</h2>
                <p>Discover insights and findings from the world of neuroscience and psychology.</p>
                <a className="home-button" href="/articles">Start Reading</a>
            </section>
        </div>
    );
};

export default HomePage;