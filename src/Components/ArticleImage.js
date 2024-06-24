import './Article.css';

export default function ArtileImage(props) {
    return(
        <div>
            <img className="article-image" src={props.src.includes("http")? props.src : "/images/"+props.src} alt={props.alt}/>
        </div>

        //Anwendung
        //1. Bild im public folder in images abspeichern
        //2. Bild (name.format) und alternativer Text als Attribut im <ArticleImage> einfügen
        //Beispiel: <ArticleImage src="bild.jpg"/>
    )
}