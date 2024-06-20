// src/pages/undersubtopics/Undersubtopic1.js
import React from 'react';
import ArticlePara from '../../Components/ArticlePara'; 
import ArticleSubtitle from '../../Components/ArticleSubtitle';
import ArticleCode from '../../Components/ArticleCode';

const Adduser = () => {
  return (
    <div>
        <h2>Benutzer erstellen mit adduser</h2>
        <ArticlePara>Der Befehl adduser bietet eine benutzerfreundlichere und interaktivere Möglichkeit, Benutzerkonten zu erstellen. Lassen Sie uns sehen, wie Sie es verwenden können: </ArticlePara>
        <br />
        <ArticlePara>Um einen Benutzer zu erstellen, geben wir sudo adduser [Benutzername] ein. </ArticlePara>
        <ArticleCode>sudo adduser test</ArticleCode>
        <br />
        <ArticlePara>Jetzt folgt ein kleiner Einrichtungsprozess, welche der Befehl selbst ausführt.</ArticlePara>
        <img alt="Bild von Terminal" src='https://linuxhandbook.com/content/images/2022/09/adduser-command.png'/>
        <br />
        <ArticlePara>Das war ein kleiner Guide zum Erstellen eines Benutzers mit dem adduser-Befehl. Wir hoffen, dass wir Ihnen damit weiterhelfen konnten und dass die beschriebenen Schritte für Sie nützlich und verständlich waren.</ArticlePara>
    </div>
  );
};

export default Adduser;
