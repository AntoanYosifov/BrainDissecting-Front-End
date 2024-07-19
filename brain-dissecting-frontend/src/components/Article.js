import '../styles/article.css';

const Article = ({article, toggleAbstractVisibility}) => {
    return (
        <div className="article-container">
            <h2 className="article-title">{article.title}</h2>
            <p className="article-journal">{article.journalTitle}</p>
            <div>
                <button onClick={() => toggleAbstractVisibility(article.id)}
                        className="abstract-toggle-button"
                >
                    {article.isAbstractVisible ? "Overview-" : "Overview+"}
                </button>
            </div>
            {article.isAbstractVisible && <p className="article-abstract">{article.abstractText}</p>}
            <a className="article-link" href={article.link} target="_blank" rel="noopener noreferrer">Read online</a>
        </div>
    );
};
export default Article;