import ArticleCode from "../../Components/ArticleCode";
import ArticlePara from "../../Components/ArticlePara";
import ArticleSubtitle from "../../Components/ArticleSubtitle";
import ArticleTitle from '../../Components/ArticleTitle';

const Package = () => (
  <>
    <ArticleTitle>Zusammenfassung: Pakete</ArticleTitle>

    <ArticleSubtitle>Was sind Pakete?</ArticleSubtitle>
    <ArticlePara>
      Pakete sind das grundlegende Mittel zur Verteilung und Installation von Software auf Linux-Systemen. Sie enthalten alle notwendigen Dateien und Informationen, um eine Softwareanwendung oder Bibliothek zu installieren und auszuführen. Die bekanntesten Paketformate sind DEB und RPM, die von verschiedenen Linux-Distributionen verwendet werden.
    </ArticlePara>

    <ArticleSubtitle>Pakete installieren</ArticleSubtitle>
    <ArticlePara>
      Die Installation von Paketen erfolgt über Paketmanager wie APT (für DEB-Pakete) und DNF (für RPM-Pakete). Diese Tools automatisieren den Prozess, lösen Abhängigkeiten und laden die benötigten Dateien herunter. Beispiele für Installationsbefehle sind:
    </ArticlePara>
    <ArticleCode>
      {`sudo apt-get install paketname
sudo dnf install paketname`}
    </ArticleCode>

    <ArticleSubtitle>Pakete löschen</ArticleSubtitle>
    <ArticlePara>
      Das Löschen von Paketen ist ebenfalls ein wichtiger Aspekt der Paketverwaltung. Paketmanager wie APT und DNF bieten Befehle zum Entfernen von Paketen. Dies hilft, das System sauber und effizient zu halten. Beispiele für Löschbefehle sind:
    </ArticlePara>
    <ArticleCode>
      {`sudo apt-get remove paketname
sudo dnf remove paketname`}
    </ArticleCode>

    <ArticleSubtitle>Vorteile von Paketen</ArticleSubtitle>
    <ArticlePara>
      Die Verwendung von Paketen bietet viele Vorteile, darunter die einfache und standardisierte Installation, automatische Verwaltung von Abhängigkeiten, einfache Aktualisierung und erhöhte Sicherheit durch die Nutzung vertrauenswürdiger Repositories.
    </ArticlePara>
  </>
);

export default Package;
