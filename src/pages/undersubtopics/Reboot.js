import ArticleCode from "../../Components/ArticleCode";
import ArticlePara from "../../Components/ArticlePara";
import ArticleSubtitle from "../../Components/ArticleSubtitle";
import ArticleTitle from '../../Components/ArticleTitle';

const Reboot = () => (
  <>
    <ArticleTitle>Reboot</ArticleTitle>
    <ArticlePara>
      Um ein Linux-System neu zu starten, kann der <code>reboot</code>-Befehl verwendet werden. Dies ist besonders nützlich nach Systemupdates oder Konfigurationsänderungen, die einen Neustart erfordern.
    </ArticlePara>
    <ArticleCode>
      {`sudo reboot`}
    </ArticleCode>
    <ArticlePara>
      Der Befehl <code>sudo reboot</code> startet das System sofort neu. Alternativ kann auch der Befehl <code>sudo shutdown -r now</code> verwendet werden, wobei der Schalter <code>-r</code> für "reboot" steht.
    </ArticlePara>
    <ArticleSubtitle>Geplanter Neustart:</ArticleSubtitle>
    <ArticleCode>
      {`sudo shutdown -r +10`}
    </ArticleCode>
    <ArticlePara>
      In diesem Beispiel wird das System in 10 Minuten neu gestartet. Sie können die Zeit in Minuten angeben oder eine genaue Uhrzeit verwenden (z. B. <code>sudo shutdown -r 23:00</code> für einen Neustart um 23:00 Uhr).
    </ArticlePara>
  </>
);

export default Reboot;
