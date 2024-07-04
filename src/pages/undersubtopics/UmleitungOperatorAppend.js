import ArticleCode from "../../Components/ArticleCode";
import ArticlePara from "../../Components/ArticlePara";
import ArticleSubtitle from "../../Components/ArticleSubtitle";
import ArticleTitle from '../../Components/ArticleTitle';

const UmleitungAppendOperator = () => (
  <>
    <ArticleTitle>Operatoren: Umleitung (&gt;&gt;)</ArticleTitle>
    <ArticlePara>
      Der Anhänge-Umleitungsoperator (<code>&gt;&gt;</code>) wird verwendet, um die Ausgabe eines Befehls an eine Datei anzuhängen. Wenn die Datei nicht existiert, wird sie erstellt.
    </ArticlePara>
    <ArticleSubtitle>Beispiel:</ArticleSubtitle>
    <ArticleCode>
      {`echo "Neue Zeile" >> hallo.txt`}
    </ArticleCode>
    <ArticlePara>
      In diesem Beispiel wird der Text "Neue Zeile" an das Ende der Datei <code>hallo.txt</code> angehängt. Existiert die Datei nicht, wird sie erstellt.
    </ArticlePara>
  </>
);

export default UmleitungAppendOperator;
