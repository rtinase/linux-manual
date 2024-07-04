import ArticleCode from "../../Components/ArticleCode";
import ArticlePara from "../../Components/ArticlePara";
import ArticleSubtitle from "../../Components/ArticleSubtitle";
import ArticleTitle from '../../Components/ArticleTitle';

const PipeOperator = () => (
  <>
    <ArticleTitle>Operatoren: Pipe (|)</ArticleTitle>
    <ArticlePara>
      Der Pipe-Operator (<code>|</code>) wird verwendet, um die Ausgabe eines Befehls als Eingabe für einen anderen Befehl zu verwenden. Dies ermöglicht die Verkettung mehrerer Befehle, um komplexe Operationen durchzuführen.
    </ArticlePara>
    <ArticleSubtitle>Beispiel:</ArticleSubtitle>
    <ArticleCode>
      {`ls -l | grep "Dokument"`}
    </ArticleCode>
    <ArticlePara>
      In diesem Beispiel wird die Ausgabe des <code>ls -l</code>-Befehls (detaillierte Auflistung der Dateien) an den <code>grep</code>-Befehl weitergeleitet, der nach Zeilen sucht, die das Wort "Dokument" enthalten.
    </ArticlePara>
  </>
);

export default PipeOperator;
