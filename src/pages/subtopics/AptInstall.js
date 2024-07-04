import ArticleCode from "../../Components/ArticleCode";
import ArticlePara from "../../Components/ArticlePara";
import ArticleSubtitle from "../../Components/ArticleSubtitle";
import ArticleTitle from '../../Components/ArticleTitle';

const AptInstall = () => (
  <>
    <ArticleTitle>Pakete installieren</ArticleTitle>
    <ArticlePara>
      Die Installation von Paketen auf einem Linux-System erfolgt in der Regel über einen Paketmanager. Ein Paketmanager ist ein Werkzeug, das die Installation, Aktualisierung und Verwaltung von Softwarepaketen automatisiert. Bekannte Paketmanager sind APT (Advanced Packaging Tool) für DEB-Pakete und YUM (Yellowdog Updater, Modified) bzw. DNF (Dandified YUM) für RPM-Pakete.
    </ArticlePara>
    <ArticleSubtitle>Beispiel für die Installation eines Pakets mit APT:</ArticleSubtitle>
    <ArticleCode>
      sudo apt-get update
    </ArticleCode>
    <br />
    <ArticleCode>
    sudo apt-get install paketname
    </ArticleCode>

    <ArticlePara>
      Im obigen Beispiel wird zunächst der Befehl <code>sudo apt-get update</code> verwendet, um die Paketlisten zu aktualisieren. Danach wird mit <code>sudo apt-get install paketname</code> das gewünschte Paket installiert. Der Paketmanager kümmert sich dabei um alle notwendigen Abhängigkeiten und installiert diese automatisch mit.
    </ArticlePara>
    <ArticleSubtitle>Beispiel für die Installation eines Pakets mit DNF:</ArticleSubtitle>
    <ArticleCode>
      {`sudo dnf install paketname`}
    </ArticleCode>
    <ArticlePara>
      Hier zeigt der Befehl <code>sudo dnf install paketname</code> die Installation eines Pakets mit dem DNF-Paketmanager. Auch hier werden die Abhängigkeiten automatisch verwaltet.
    </ArticlePara>
    <ArticlePara>
      Zusätzlich zur Kommandozeile bieten viele Linux-Distributionen auch grafische Paketmanager wie Synaptic (für APT-basierte Systeme) oder GNOME Software, die eine benutzerfreundliche Oberfläche zur Paketverwaltung bieten. Diese Werkzeuge ermöglichen es Benutzern, Pakete zu durchsuchen und zu installieren, ohne Befehle in der Kommandozeile eingeben zu müssen.
    </ArticlePara>
  </>
);

export default AptInstall;
