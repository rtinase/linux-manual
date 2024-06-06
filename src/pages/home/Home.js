import React from 'react';
import './Home.css'; // Stellen Sie sicher, dass die passende CSS-Datei vorhanden ist

const Home = () => {
  return (
    <div className="home-container">
      <section className="home-hero">
        <h1>Willkommen im Linux Handbuch</h1>
        <p>Home</p>
      </section>
      
      <section className="home-introduction">
        <h2>Einführung in Linux</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
      </section>

      <section className="home-getting-started">
        <h2>Erste Schritte</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet purus quis metus imperdiet, et ultricies sapien tincidunt. Curabitur ac felis in turpis pharetra convallis. Ut non nisi tellus.</p>
      </section>

      <section className="home-tools">
        <h2>Unentbehrliche Werkzeuge</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris dolor, gravida a varius blandit, auctor eget purus. Phasellus scelerisque sapien turpis, at feugiat lorem tincidunt a.</p>
      </section>

      <section className="home-advanced-usage">
        <h2>Fortgeschrittene Techniken</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar, nunc sit amet aliquam aliquet, urna nisl luctus tortor, vel vestibulum dolor mauris in felis.</p>
      </section>

      <section className="home-programming">
        <h2>Programmieren unter Linux</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id arcu aliquet, elementum nisi quis, condimentum nibh.</p>
      </section>

      <section className="home-community">
        <h2>Die Linux-Gemeinschaft</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue.</p>
      </section>

      <footer className="home-footer">
        <p>© 2024 Ihr Linux Handbuch Team. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
};

export default Home;
