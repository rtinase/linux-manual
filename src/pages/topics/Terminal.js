import ArticlePara from "../../Components/ArticlePara";
import ArticleSubtitle from "../../Components/ArticleSubtitle";
import ArticleTitle from '../../Components/ArticleTitle';

const Terminal = () => (
  <>
    <ArticleTitle>Zusammenfassung: Befehle im CMD</ArticleTitle>

    <ArticleSubtitle>Die Rolle des Terminals bei Linux</ArticleSubtitle>
    <ArticlePara>
      Das Terminal ist eines der mächtigsten Werkzeuge in einem Linux-Betriebssystem. Es ermöglicht direkte Interaktionen mit dem Betriebssystem, erleichtert die Systemadministration und bietet Effizienz und Flexibilität für eine Vielzahl von Aufgaben.
    </ArticlePara>

    <ArticleSubtitle>Task auf Port ... beenden</ArticleSubtitle>
    <ArticlePara>
      Um einen Task zu beenden, der einen bestimmten Port belegt, finden Sie zunächst die Prozess-ID (PID) mit <code>sudo lsof -i :8080</code> und beenden Sie den Prozess mit <code>sudo kill -9 &lt;PID&gt;</code>.
    </ArticlePara>

    <ArticleSubtitle>Operatoren</ArticleSubtitle>
    <ArticlePara>
      Linux-Terminals bieten mehrere Operatoren zur Steuerung der Befehlsausgabe:
    </ArticlePara>
    <ArticleSubtitle>Pipe (|)</ArticleSubtitle>
    <ArticlePara>
      Der Pipe-Operator (<code>|</code>) leitet die Ausgabe eines Befehls als Eingabe für einen anderen Befehl weiter. Beispiel: <code>ls -l | grep "Dokument"</code>.
    </ArticlePara>
    <ArticleSubtitle>Umleitung ({">"} und {">>"})</ArticleSubtitle>
    <ArticlePara>
      Der Umleitungsoperator (<code>&gt;</code>) schreibt die Ausgabe eines Befehls in eine Datei und überschreibt sie. Beispiel: <code>echo "Hallo Welt" &gt; hallo.txt</code>. Der Anhänge-Umleitungsoperator (<code>&gt;&gt;</code>) fügt die Ausgabe an eine Datei an. Beispiel: <code>echo "Neue Zeile" &gt;&gt; hallo.txt</code>.
    </ArticlePara>

    <ArticleSubtitle>Herunterfahren & Reboot</ArticleSubtitle>
    <ArticlePara>
      Das Herunterfahren und Neustarten eines Linux-Systems kann über das Terminal erfolgen:
    </ArticlePara>
    <ArticleSubtitle>Herunterfahren</ArticleSubtitle>
    <ArticlePara>
      Verwenden Sie <code>sudo shutdown -h now</code> für ein sofortiges Herunterfahren oder <code>sudo shutdown -h +10</code> für ein geplantes Herunterfahren in 10 Minuten.
    </ArticlePara>
    <ArticleSubtitle>Reboot</ArticleSubtitle>
    <ArticlePara>
      Verwenden Sie <code>sudo reboot</code> für einen sofortigen Neustart oder <code>sudo shutdown -r now</code>. Für einen geplanten Neustart in 10 Minuten verwenden Sie <code>sudo shutdown -r +10</code>.
    </ArticlePara>
  </>
);

export default Terminal;
