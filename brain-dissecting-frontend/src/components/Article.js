import {useEffect, useState} from "react";
import axios from "axios";
import '../styles/article.css';
const Article = () => {
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try{
                const response = await axios.get(`http://localhost:8080/api/articles/1`);
                setArticle(response.data);
            } catch (error) {
                console.error('Error fetching article: ', error);
            }

        };

        fetchArticle();
    }, []);

    if(!article){
        return <div>Loading...</div>;
    }

    return (
    <div className="article-container">
        <h2 className="article-title">{article.title}</h2>
        <p className="article-abstract">{article.abstractText}</p>
        <p className="article-journal">{article.journalTitle}</p>
    </div>
    );
};

export default Article;