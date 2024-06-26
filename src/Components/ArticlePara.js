import './Article.css';

export default function ArticlePara(props) {
    return (
        <div className='aritcle-para'>
            <p>{props.children}</p>
        </div>

        //Anwendung
        //Abschnitte im <ArticlePara> *hier* </ArticlePara> hineinschreiben
    )
}