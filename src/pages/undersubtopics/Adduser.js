// src/pages/undersubtopics/Undersubtopic1.js
import React from 'react';
import ArticlePara from '../../Components/ArticlePara'; 
import ArticleSubtitle from '../../Components/ArticleSubtitle';
import ArticleCode from '../../Components/ArticleCode';
import ArticleTitle from '../../Components/ArticleTitle'
import ArtileImage from '../../Components/ArticleImage';

const Adduser = () => {
  return (
    <div>
        <ArticleTitle>Benutzer erstellen mit adduser</ArticleTitle>
        <ArticlePara>Der Befehl adduser bietet eine benutzerfreundlichere und interaktivere Möglichkeit, Benutzerkonten zu erstellen. Lassen Sie uns sehen, wie Sie es verwenden können: </ArticlePara>
        <br />
        <ArticlePara>Um einen Benutzer zu erstellen, geben wir sudo adduser [Benutzername] ein. </ArticlePara>
        <ArticleCode>sudo adduser test</ArticleCode>
        <br />
        <ArticlePara>Jetzt folgt ein kleiner Einrichtungsprozess, welche der Befehl selbst ausführt.</ArticlePara>
        <ArtileImage alt="Bild von Terminal" src='https://media.geeksforgeeks.org/wp-content/uploads/20200614204839/3-To-add-a-new-user-with-a-different-configuration-file..png'/>
        <br />
        <ArticlePara>Das war ein kleiner Guide zum Erstellen eines Benutzers mit dem adduser-Befehl. Wir hoffen, dass wir Ihnen damit weiterhelfen konnten und dass die beschriebenen Schritte für Sie nützlich und verständlich waren.</ArticlePara>
    </div>
  );
};

export default Adduser;
