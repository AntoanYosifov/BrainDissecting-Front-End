import {useEffect, useState} from "react";
import axios from "axios";

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
    <div>
        <h1>{article.title}</h1>
        <p>{article.abstractText}</p>
    </div>
    );
};

export default Article;