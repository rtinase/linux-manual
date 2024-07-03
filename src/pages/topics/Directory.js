// src/pages/topics/Topic1.js
import React from 'react';
import ArticlePara from '../../Components/ArticlePara';
import ArticleSubtitle from '../../Components/ArticleSubtitle';
import ArticleTitle from '../../Components/ArticleTitle'

const Directory = () => {
  return (
    <div>
    <ArticleTitle>Das erste Linux Betriebssystem</ArticleTitle>
    <ArticlePara>
      Das erste Linux-Betriebssystem wurde Anfang der 1990er Jahre entwickelt. Linus Torvalds, ein finnischer Informatikstudent, begann 1991 mit der Entwicklung eines freien Unix-ähnlichen Betriebssystems als Hobbyprojekt. Er wollte ein freies Betriebssystem schaffen, das auf Standard-PC-Hardware laufen konnte und veröffentlichte den ersten Kernel am 17. September 1991. Dieser Kernel wurde als „Linux“ bekannt und war die Grundlage für das, was heute eine Vielzahl von Distributionen und ein bedeutender Teil der IT-Welt ist.
    </ArticlePara>
    <br />
    <ArticleTitle>Linus Torvalds</ArticleTitle>
    <ArticlePara>
      Linus Torvalds wurde am 28. Dezember 1969 in Helsinki, Finnland, geboren. Er begann seine Karriere in der Informatik an der Universität Helsinki. Während seines Studiums stieß er auf das Betriebssystem Minix und entschied sich, ein eigenes Betriebssystem zu entwickeln, das er „Linux“ nannte. Sein erster Beitrag zur Welt der Open-Source-Software war der Linux-Kernel, den er 1991 veröffentlichte. Torvalds ist bis heute aktiv in der Entwicklung von Linux involviert und leitet das Linux-Kernel-Projekt.
    </ArticlePara>
    <br />

    <ArticleTitle>Distributionen</ArticleTitle>

    <ArticleSubtitle>Debian</ArticleSubtitle>
    <ArticlePara>
      Debian ist eine der ältesten und bekanntesten Linux-Distributionen. Sie wurde 1993 von Ian Murdock gegründet und zeichnet sich durch ihre Stabilität und umfangreiche Software-Repositories aus. Debian ist bekannt für seine strikte Einhaltung der freien Software-Prinzipien und dient als Basis für viele andere Distributionen, darunter Ubuntu.
    </ArticlePara>

    <ArticleSubtitle>Ubuntu</ArticleSubtitle>
    <ArticlePara>
      Ubuntu ist eine weit verbreitete Linux-Distribution, die 2004 von Mark Shuttleworth und seiner Firma Canonical Ltd. ins Leben gerufen wurde. Sie basiert auf Debian und ist bekannt für ihre Benutzerfreundlichkeit und regelmäßigen Releases. Ubuntu ist besonders im Desktop-Bereich beliebt und bietet verschiedene Versionen für Server, IoT-Geräte und Cloud-Anwendungen.
    </ArticlePara>

    <ArticleSubtitle>Mint</ArticleSubtitle>
    <ArticlePara>
      Linux Mint ist eine benutzerfreundliche Distribution, die 2006 erstmals veröffentlicht wurde. Sie basiert auf Ubuntu und Debian und bietet eine Vielzahl von Desktop-Umgebungen, darunter Cinnamon, MATE und Xfce. Mint ist bekannt für seine einfache Installation, benutzerfreundliche Oberfläche und umfassende Multimedia-Unterstützung.
    </ArticlePara>

    <ArticleSubtitle>Kali</ArticleSubtitle>
    <ArticlePara>
      Kali Linux ist eine spezialisierte Distribution, die 2013 von Offensive Security entwickelt wurde. Sie ist auf Penetrationstests und Sicherheitsforschung ausgerichtet und enthält eine Vielzahl von Werkzeugen für Netzwerksicherheit, forensische Analysen und Penetrationstests. Kali basiert auf Debian und wird regelmäßig aktualisiert, um die neuesten Sicherheitswerkzeuge zu bieten.
    </ArticlePara>

    <ArticleSubtitle>Arch Linux</ArticleSubtitle>
    <ArticlePara>
      Arch Linux ist eine flexible und leichtgewichtige Distribution, die 2002 veröffentlicht wurde. Sie richtet sich an fortgeschrittene Benutzer, die ein maßgeschneidertes Betriebssystem wünschen. Arch verwendet ein Rolling-Release-Modell, das kontinuierliche Updates ermöglicht. Es ist bekannt für seine Einfachheit und die Philosophie des KISS-Prinzips (Keep It Simple, Stupid).
    </ArticlePara>
     
    </div>
  );
};

export default Directory;
