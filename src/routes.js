// src/routes.js
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Topic1 from './pages/topics/Topic1';
import Topic2 from './pages/topics/Topic2';
import Subtopic1 from './pages/subtopics/Subtopic1';
import Subtopic2 from './pages/subtopics/Subtopic2';
import Subtopic3 from './pages/subtopics/Subtopic3';
import Undersubtopic1 from './pages/undersubtopics/Undersubtopic1';

const RoutesConfig = () => (
  <React.Fragment>
    <Route path="/" element={<Home />} />
    <Route path="/topics/topic1" element={<Topic1 />} />
    <Route path="/subtopics/subtopic1" element={<Subtopic1 />} />
    <Route path="/subtopics/subtopic2" element={<Subtopic2 />} />
    <Route path="/subtopics/subtopic3" element={<Subtopic3 />} />
    <Route path="/undersubtopics/undersubtopic1" element={<Undersubtopic1 />} />
    <Route path="/topics/topic2" element={<Topic2 />} />
  </React.Fragment>
);

export default RoutesConfig;

