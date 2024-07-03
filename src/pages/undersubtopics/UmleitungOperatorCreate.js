import ArticleCode from "../../Components/ArticleCode";
import ArticlePara from "../../Components/ArticlePara";
import ArticleSubtitle from "../../Components/ArticleSubtitle";
import ArticleTitle from '../../Components/ArticleTitle';

const UmleitungOperator = () => (
  <>
    <ArticleTitle>Operatoren: Umleitung (&gt;)</ArticleTitle>
    <ArticlePara>
      Der Umleitungsoperator (<code>&gt;</code>) wird verwendet, um die Ausgabe eines Befehls in eine Datei zu schreiben. Wenn die Datei bereits existiert, wird sie überschrieben.
    </ArticlePara>
    <ArticleSubtitle>Beispiel:</ArticleSubtitle>
    <ArticleCode>
      {`echo "Hallo Welt" > hallo.txt`}
    </ArticleCode>
    <ArticlePara>
      In diesem Beispiel wird der Text "Hallo Welt" in die Datei <code>hallo.txt</code> geschrieben. Existiert die Datei bereits, wird ihr Inhalt überschrieben.
    </ArticlePara>
  </>
);

export default UmleitungOperator;
