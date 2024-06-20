// src/pages/undersubtopics/Useradd.js
import React from 'react';
import ArticlePara from '../../Components/ArticlePara'; 
import ArticleSubtitle from '../../Components/ArticleSubtitle';
import ArticleCode from '../../Components/ArticleCode';

const Useradd = () => {
  return (
  
    <div>
     <h2>Benutzer erstellen mit useradd</h2>
      <ArticlePara>Useradd ist ein leichter Befehl der Benutzt wird, um einen Benutzer zu erstellen. Um gut mit Useradd zu arbeiten, braucht man verschiedene Parameter. Gegenteilig zum addUser befehl, wird wenig selbst erstellt. </ArticlePara>
      <ArticleSubtitle>Um einen einfachen Benutzer zu erstellen, schreiben wir das: </ArticleSubtitle>
      <br />
      <ArticleCode>sudo useradd [Benutzernamen]</ArticleCode>
      <ArticlePara>Das kann dann z.B. so aussehen:</ArticlePara>
      <ArticleCode>useradd test</ArticleCode>
      <br />
      <ArticlePara>Dieser User hat aber kein Home-Verzeichnis und dass ist für die meisten fälle nicht gut, deswegen fügen wir den Parameter -m dem Befehl dazu. </ArticlePara>
      <ArticleCode>useradd -m test </ArticleCode>
      <br />
      <ArticlePara>Möchten wir dieses Home-Verzeichnis an einen Speziellen Ort erstellen geben wir noch den Speicherort als Parameter mit -d [Verzeichnis] an. </ArticlePara>
      <ArticleCode>useradd -m -d /testordner test</ArticleCode>
      <br />
      <ArticlePara>Falls wir einen Benutzer mit Ablaufdatum erstellen möchten, können wir dies mit dem Parameter -e [Jahr-Monat-Tag]</ArticlePara>
      <ArticleCode>useradd -m -d /testordner -e 2025-1-1 test </ArticleCode>
      <br />
      <ArticlePara>Je nach Wunsch können wir auch die Standard-Shell festlegen. Dafür benutzen wir den Parameter -s [Shell]. </ArticlePara>
      <ArticleCode>useradd -m -d /testordner -e 2025-1-1 -s /bin/bash test</ArticleCode>
      <br />
      <br />
      <img alt="Bild von Terminal" src='https://media.geeksforgeeks.org/wp-content/uploads/20200521030422/useradd-help-section.png'/>
      <br />
      <br />
      <ArticlePara>Das war ein kleiner Guide zum Erstellen eines Benutzers mit dem useradd-Befehl. Wir hoffen, dass wir Ihnen damit weiterhelfen konnten und dass die beschriebenen Schritte für Sie nützlich und verständlich waren.</ArticlePara>
   
    </div>
  );
};

export default Useradd;
