import ArticleCode from "../../Components/ArticleCode";
import ArticlePara from "../../Components/ArticlePara";
import ArticleSubtitle from "../../Components/ArticleSubtitle";
import ArticleTitle from '../../Components/ArticleTitle';

const HerunterfahrenReboot = () => (
  <>
    <ArticleTitle>Zusammenfassung: Herunterfahren & Reboot</ArticleTitle>

    <ArticleSubtitle>Herunterfahren</ArticleSubtitle>
    <ArticlePara>
      Das Herunterfahren eines Linux-Systems kann über das Terminal mit verschiedenen Befehlen durchgeführt werden:
    </ArticlePara>
    <ArticlePara>
      <code>sudo shutdown -h now</code>: Sofortiges Herunterfahren.
    </ArticlePara>
    <ArticlePara>
      <code>sudo shutdown -h +10</code>: Geplantes Herunterfahren in 10 Minuten.
    </ArticlePara>
    <ArticlePara>
      <code>sudo shutdown -h 23:00</code>: Geplantes Herunterfahren um 23:00 Uhr.
    </ArticlePara>

    <ArticleSubtitle>Reboot</ArticleSubtitle>
    <ArticlePara>
      Ein Linux-System kann mit folgenden Befehlen neu gestartet werden:
    </ArticlePara>
    <ArticlePara>
      <code>sudo reboot</code>: Sofortiger Neustart.
    </ArticlePara>
    <ArticlePara>
      <code>sudo shutdown -r now</code>: Sofortiger Neustart.
    </ArticlePara>
    <ArticlePara>
      <code>sudo shutdown -r +10</code>: Geplanter Neustart in 10 Minuten.
    </ArticlePara>
    <ArticlePara>
      <code>sudo shutdown -r 23:00</code>: Geplanter Neustart um 23:00 Uhr.
    </ArticlePara>
  </>
);

export default HerunterfahrenReboot;
