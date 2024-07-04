import ArticleCode from "../../Components/ArticleCode";
import ArticlePara from "../../Components/ArticlePara";
import ArticleSubtitle from "../../Components/ArticleSubtitle";
import ArticleTitle from '../../Components/ArticleTitle';

const TaskBeenden = () => (
  <>
    <ArticleTitle>Task auf Port ... beenden</ArticleTitle>
    <ArticlePara>
      Um einen Task zu beenden, der einen bestimmten Port belegt, muss man zunächst die Prozess-ID (PID) des Tasks herausfinden und ihn dann beenden. Dies kann über das Terminal erfolgen.
    </ArticlePara>
    <ArticleSubtitle>Schritt 1: Prozess-ID herausfinden</ArticleSubtitle>
    <ArticlePara>
      Verwenden Sie den folgenden Befehl, um die PID des Prozesses zu finden, der einen bestimmten Port verwendet (zum Beispiel Port 8080):
    </ArticlePara>
    <ArticleCode>
      {`sudo lsof -i :8080`}
    </ArticleCode>
    <ArticlePara>
      Der Befehl <code>lsof</code> listet offene Dateien auf und mit der Option <code>-i</code> können Sie nach Prozessen filtern, die Netzwerkverbindungen verwenden.
    </ArticlePara>
    <ArticleSubtitle>Schritt 2: Prozess beenden</ArticleSubtitle>
    <ArticlePara>
      Sobald Sie die PID des Prozesses haben, können Sie ihn mit dem folgenden Befehl beenden:
    </ArticlePara>
    <ArticleCode>
      {`sudo kill -9 <PID>`}
    </ArticleCode>
    <ArticlePara>
      Ersetzen Sie <code>&lt;PID&gt;</code> durch die tatsächliche Prozess-ID. Der Schalter <code>-9</code> erzwingt das Beenden des Prozesses.
    </ArticlePara>
  </>
);

export default TaskBeenden;
