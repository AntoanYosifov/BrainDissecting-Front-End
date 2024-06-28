import {useEffect, useState} from "react";
import axios from "axios";

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try{
                const response = await axios.get('http://localhost:8080/api/articles');
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching articles: ', error);
            }

        };

        fetchArticles();
    }, []);

    return (
        <div>
            <h1>Articles</h1>
            {articles.map((article) => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                    <p>{article.author}</p>
                </div>

            ))}
        </div>
    );
};

export default Articles;