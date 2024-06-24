import './Article.css';

export default function ArticleTitle(props) {
    return (
        <div>
            <h1 className="article-title">{ props.children }</h1>
        </div>
    )
}