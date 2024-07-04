import ArticleCode from "../../Components/ArticleCode";
import ArticlePara from "../../Components/ArticlePara";
import ArticleSubtitle from "../../Components/ArticleSubtitle";
import ArticleTitle from '../../Components/ArticleTitle';

const Operatoren = () => (
  <>
    <ArticleTitle>Zusammenfassung: Operatoren</ArticleTitle>

    <ArticleSubtitle>Pipe (|)</ArticleSubtitle>
    <ArticlePara>
      Der Pipe-Operator (<code>|</code>) leitet die Ausgabe eines Befehls als Eingabe für einen anderen Befehl weiter. Dies ermöglicht die Verkettung mehrerer Befehle, um komplexe Operationen durchzuführen.
    </ArticlePara>
    <ArticlePara>
      <code>ls -l | grep "Dokument"</code>: Leitet die Ausgabe des <code>ls -l</code>-Befehls an <code>grep</code> weiter, um nach Zeilen mit dem Wort "Dokument" zu suchen.
    </ArticlePara>

    <ArticleSubtitle>Umleitung (&gt; und &gt;&gt;)</ArticleSubtitle>
    <ArticlePara>
      Die Umleitungsoperatoren leiten die Ausgabe eines Befehls in eine Datei um:
    </ArticlePara>
    <ArticleSubtitle>Umleitung (&gt;)</ArticleSubtitle>
    <ArticlePara>
      Der Umleitungsoperator (<code>&gt;</code>) schreibt die Ausgabe eines Befehls in eine Datei und überschreibt diese.
    </ArticlePara>
    <ArticlePara>
      <code>echo "Hallo Welt" &gt; hallo.txt</code>: Schreibt "Hallo Welt" in die Datei <code>hallo.txt</code> und überschreibt ihren Inhalt, falls sie bereits existiert.
    </ArticlePara>
    <ArticleSubtitle>Umleitung (&gt;&gt;)</ArticleSubtitle>
    <ArticlePara>
      Der Anhänge-Umleitungsoperator (<code>&gt;&gt;</code>) fügt die Ausgabe eines Befehls an das Ende einer Datei an.
    </ArticlePara>
    <ArticlePara>
      <code>echo "Neue Zeile" &gt;&gt; hallo.txt</code>: Hängt "Neue Zeile" an das Ende der Datei <code>hallo.txt</code> an. Existiert die Datei nicht, wird sie erstellt.
    </ArticlePara>
  </>
);

export default Operatoren;
