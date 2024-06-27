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
import Useradd from './pages/undersubtopics/Useradd';
import Adduser from './pages/undersubtopics/Adduser';
import Createuser from './pages/subtopics/Createuser';
import Usermod from './pages/subtopics/Usermod'
import Userdel from './pages/subtopics/Userdel';
import User from './pages/topics/User';
import Directory from './pages/topics/Directory';

const RoutesConfig = () => (
  <React.Fragment>
    <Route path="/" element={<Home />} />
    <Route path="/topics/topic1" element={<Topic1 />} />
    <Route path="/subtopics/subtopic1" element={<Subtopic1 />} />
    <Route path="/subtopics/subtopic2" element={<Subtopic2 />} />
    <Route path="/subtopics/subtopic3" element={<Subtopic3 />} />
    <Route path="/undersubtopics/undersubtopic1" element={<Undersubtopic1 />} />
    <Route path="/topics/topic2" element={<Topic2 />} />
    <Route path="/undersubtopics/useradd" element={<Useradd />} />
    <Route path="/undersubtopics/adduser" element={<Adduser />} />
    <Route path="/subtopics/createuser" element={<Createuser />} />
    <Route path="/subtopics/usermod" element={<Usermod />} />
    <Route path="/subtopics/userdel" element={<Userdel />} />
    <Route path="/topics/user" element={<User />} />
    <Route path="/topics/directory" element={<Directory />} />

  </React.Fragment>
);

export default RoutesConfig;

