import {useEffect, useState} from "react";
import axios from "axios";
import Article from "../components/Article";
import '../styles/articles-page.css';

const ArticlesPage = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/articles/top');
                const articleWithVisibility = response.data.map(article => ({
                    ...article,
                    isAbstractVisible: false
                }));
                setArticles(articleWithVisibility);
            } catch (error) {
                console.log('Error fetching articles: ', error);
            }
        };
        fetchArticles();
    }, []);

    const toggleAbstractVisibility = (id) => {
        setArticles(prevState =>
            prevState.map(article =>
                article.id === id ? {...article, isAbstractVisible: !article.isAbstractVisible} : article
            )
        );
    };

    if (articles.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="articles-page">
            {articles.map(article => (
                <Article
                    key={article.id}
                    article={article}
                    toggleAbstractVisibility={toggleAbstractVisibility}
                />
            ))}
        </div>
    );
};

export default ArticlesPage;