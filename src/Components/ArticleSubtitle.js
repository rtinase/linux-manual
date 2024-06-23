import './Article.css';

export default function ArticleSubtitle(props) {
    return (
        <div>
            <h2 className="article-subtitle">{ props.children }</h2>
        </div>
    )
}