import './Article.css';

export default function ArticleCode(props) {
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
    }
    return (
        <div className='article-code-div'>
            <p className="article-code code">{props.children}</p>
            <div className="article-code-copy">
                <img className="article-code-image" src="/copy.svg" alt="copy to clipboard" onClick={() => copyToClipboard(props.children)} />
            </div>
        </div>
    )

    //Anwendung
    //Code zeilen in <ArticleCode> *hier* </ArticleCode> hineinschreiben
}