import React from 'react';
import ArticelCode from '../../Components/ArticleCode';
import ArticelPara from '../../Components/ArticlePara';
import ArticelSubtitle from '../../Components/ArticleSubtitle';
// Beispielsweise in src/pages/subtopics/Subtopic1.js

const Userdel = () => {
  return (
    <div>
      <h1>Benutzer löschen</h1>
      <ArticelPara>Wenn ein Benutzerkonto nicht mehr benötigt wird, können Sie es mit dem Befehl userdel löschen. Es gibt verschiedene Optionen, die Sie dabei verwenden können: </ArticelPara>
      <br />
      <ArticelSubtitle>Einfaches Löschen eines Benutzers </ArticelSubtitle>
      <ArticelCode>sudo userdel [Benutzername]</ArticelCode>
      <br />
      <ArticelPara>Beispiel:</ArticelPara>
      <ArticelCode>sudo userdel testuser</ArticelCode>
      <br />
      <ArticelCode>Dieser Befehl entfernt den Benutzer, lässt aber das Home-Verzeichnis und die zugehörigen Dateien unberührt. </ArticelCode>
      <br />
      <ArticelSubtitle>Löschen eines Benutzers und seines Home-Verzeichnisses </ArticelSubtitle>
      <ArticelCode>sudo userdel -r [Benutzername]</ArticelCode>
      <br />
      <ArticelPara>Beispiel:</ArticelPara>
      <ArticelCode>sudo userdel -r testuser</ArticelCode>
      <br />
      <br />

      <ArticelPara>Diese Option entfernt den Benutzer und löscht gleichzeitig das Home-Verzeichnis und alle darin enthaltenen Dateien. Dies ist nützlich, wenn Sie sicherstellen möchten, dass keine persönlichen Daten des Benutzers auf dem System verbleiben. </ArticelPara>
      <br />

    </div>
  );
};

export default Userdel;
