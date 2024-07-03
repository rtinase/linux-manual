import ArticleCode from "../../Components/ArticleCode";
import ArticlePara from "../../Components/ArticlePara";
import ArticleSubtitle from "../../Components/ArticleSubtitle";
import ArticleTitle from '../../Components/ArticleTitle';

const AptRemove = () => (
  <>
    <ArticleTitle>Pakete löschen</ArticleTitle>
    <ArticlePara>
      Das Löschen von Paketen von einem Linux-System ist genauso wichtig wie die Installation. Dies hilft, das System sauber und effizient zu halten, indem nicht mehr benötigte Software entfernt wird. Wie bei der Installation werden auch beim Löschen von Paketen Paketmanager verwendet.
    </ArticlePara>
    <ArticleSubtitle>Beispiel für das Löschen eines Pakets mit APT:</ArticleSubtitle>
    <ArticleCode>
      {`sudo apt-get remove paketname`}
    </ArticleCode>
    <ArticlePara>
      Der Befehl <code>sudo apt-get remove paketname</code> entfernt das angegebene Paket von dem System. Dieser Befehl entfernt jedoch nicht die Konfigurationsdateien des Pakets. Um auch die Konfigurationsdateien zu löschen, kann der Befehl <code>sudo apt-get purge paketname</code> verwendet werden.
    </ArticlePara>
    <ArticleSubtitle>Beispiel für das Löschen eines Pakets mit DNF:</ArticleSubtitle>
    <ArticleCode>
      {`sudo dnf remove paketname`}
    </ArticleCode>
    <ArticlePara>
      Hier zeigt der Befehl <code>sudo dnf remove paketname</code> die Deinstallation eines Pakets mit dem DNF-Paketmanager. Auch hier werden die Paketdateien entfernt, aber nicht zwangsläufig die Konfigurationsdateien.
    </ArticlePara>
    <ArticlePara>
      Neben der Kommandozeile bieten auch grafische Paketmanager Funktionen zum Entfernen von Paketen. Diese Tools bieten eine benutzerfreundliche Möglichkeit, installierte Pakete zu durchsuchen und zu entfernen.
    </ArticlePara>
    <ArticlePara>
      Das regelmäßige Entfernen von nicht mehr benötigten Paketen hilft, Speicherplatz freizugeben und die Leistung des Systems zu verbessern. Es ist auch eine gute Praxis, Abhängigkeiten und unbenutzte Pakete zu bereinigen, die möglicherweise nach der Deinstallation von Software zurückbleiben. Dies kann mit Befehlen wie <code>sudo apt-get autoremove</code> in APT oder <code>sudo dnf autoremove</code> in DNF erreicht werden.
    </ArticlePara>
  </>
);

export default AptRemove;
