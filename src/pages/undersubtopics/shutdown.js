import ArticleCode from "../../Components/ArticleCode";
import ArticlePara from "../../Components/ArticlePara";
import ArticleSubtitle from "../../Components/ArticleSubtitle";
import ArticleTitle from '../../Components/ArticleTitle';

const Shutdown = () => (
  <>
    <ArticleTitle>Herunterfahren</ArticleTitle>
    <ArticlePara>
      Das Herunterfahren eines Linux-Systems kann über das Terminal mit verschiedenen Befehlen durchgeführt werden. Der häufigste Befehl zum Herunterfahren ist:
    </ArticlePara>
    <ArticleCode>
      {`sudo shutdown -h now`}
    </ArticleCode>
    <ArticlePara>
      Der Befehl <code>shutdown -h now</code> weist das System an, sofort herunterzufahren. Der Schalter <code>-h</code> steht für "halt", was bedeutet, dass das System angehalten wird.
    </ArticlePara>
    <ArticleSubtitle>Geplantes Herunterfahren:</ArticleSubtitle>
    <ArticleCode>
      {`sudo shutdown -h +10`}
    </ArticleCode>
    <ArticlePara>
      In diesem Beispiel wird das System in 10 Minuten heruntergefahren. Sie können die Zeit in Minuten angeben oder eine genaue Uhrzeit verwenden (z. B. <code>sudo shutdown -h 23:00</code> für ein Herunterfahren um 23:00 Uhr).
    </ArticlePara>
  </>
);

export default Shutdown;
