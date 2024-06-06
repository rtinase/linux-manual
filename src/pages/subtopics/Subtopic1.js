// Beispielsweise in src/pages/subtopics/Subtopic1.js
import React from 'react';
import Breadcrumbs from '../../Components/Breadcrumbs.js';

const Subtopic1 = () => {
  return (
    <div>
      <Breadcrumbs />
      <h1>Subtopic 1</h1>
      <p>This is the detailed page for Subtopic 1.</p>
    </div>
  );
};

export default Subtopic1;
