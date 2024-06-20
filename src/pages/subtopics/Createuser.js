import React from 'react';
import ArticelCode from '../../Components/ArticleCode';
import ArticelPara from '../../Components/ArticlePara';
import ArticelSubtitle from '../../Components/ArticleSubtitle';
import Adduser from '../undersubtopics/Adduser';
import Useradd from '../undersubtopics/Useradd';
// Beispielsweise in src/pages/subtopics/Subtopic1.js

const Createuser = () => {
  return (
    <div>
      <h1>Benutzer erstellen </h1>
      <ArticelPara>Möchten Sie einen weiteren Benutzer auf ihrem Linux Gerät? Kein Problem, hier zeigen wir Ihnen zwei Wege wie es geht.</ArticelPara>
      <br />
      <ArticelSubtitle>Kurzfassung</ArticelSubtitle>
      <br />
      <ArticelCode>sudo useradd -m [Benutzernamen]</ArticelCode>
      <ArticelCode>sudo passwd [Benutzername] </ArticelCode>
      <ArticelCode>sudo usermod -aG [Benutzergruppe] [Benutzername]</ArticelCode>
      <br />
      <hr />
      <br />
      <Adduser></Adduser>
      <br />
      <hr />
      <br />
      <Useradd></Useradd>
      <br />
      <br />

    </div>
  );
};

export default Createuser;
