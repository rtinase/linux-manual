export default function ArtileImage(props) {
    return(
        <div class="article-image">
            <img src={"/public/images."+props.src} alt={props.alt}/>
        </div>

        //Anwendung
        //1. Bild im public folder in images abspeichern
        //2. Bild (name.format) und alternativer Text als Attribut im <ArticleImage> einfügen
        //Beispiel: <ArticleImage src="bild.jpg"/>
    )
}