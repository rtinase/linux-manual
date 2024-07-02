import React from 'react';
import './Home.css'; // Stellen Sie sicher, dass die passende CSS-Datei vorhanden ist

const Home = () => {
  return (
    <div className="home-container">
      <section className="home-hero">
        <h1>Willkommen im Linux Handbuch</h1>
      </section>
      
      <section className="home-introduction">
        <h2>Einführung in Linux</h2>
        <p>Linux ist ein vielseitiges und leistungsstarkes Betriebssystem, das in vielen Bereichen Anwendung findet. Es bietet Stabilität, Sicherheit und eine hohe Anpassungsfähigkeit.</p>
      </section>

      <section className="home-getting-started">
        <h2>Erste Schritte</h2>
        <p>Um mit Linux zu beginnen, installieren Sie eine Distribution wie Ubuntu oder Fedora. Lernen Sie grundlegende Befehle und erkunden Sie die grafische Benutzeroberfläche.</p>
      </section>

      <section className="home-tools">
        <h2>Unentbehrliche Werkzeuge</h2>
        <p>Zu den unverzichtbaren Tools unter Linux gehören der Paketmanager, der Terminal-Emulator und Editoren wie Vim oder Nano. Diese helfen Ihnen, effizient zu arbeiten.</p>
      </section>

      <section className="home-advanced-usage">
        <h2>Fortgeschrittene Techniken</h2>
        <p>Fortgeschrittene Benutzer können Linux durch das Schreiben von Shell-Skripten und die Nutzung von Automatisierungstools wie Ansible oder Puppet noch leistungsfähiger machen.</p>
      </section>

      <section className="home-programming">
        <h2>Programmieren unter Linux</h2>
        <p>Linux bietet eine hervorragende Umgebung für Programmierer, mit Unterstützung für zahlreiche Programmiersprachen und Entwicklungswerkzeuge wie GCC, Git und Docker.</p>
      </section>

      <section className="home-community">
        <h2>Die Linux-Gemeinschaft</h2>
        <p>Die Linux-Gemeinschaft ist aktiv und unterstützend. Sie können an Foren, Mailinglisten und lokalen Benutzergruppen teilnehmen, um Hilfe zu erhalten und sich weiterzubilden.</p>
      </section>
    </div>
  );
};

export default Home;
