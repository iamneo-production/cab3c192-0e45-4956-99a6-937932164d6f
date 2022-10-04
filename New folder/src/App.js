import React from "react";
import "./App.css";
import Header from "./components/Header";

import Add from "./components/Admin/Acadmey/Add";
import Home from "./components/Admin/Acadmey/Home";
import Auth from "./pages/Auth";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CourseHome from "./components/Admin/Courses/CourseHome";
import AddCourses from "./components/Admin/Courses/AddCourse";
import AddStudent from "./components/Admin/Student/AddStudent";
import StudentHome from "./components/Admin/Student/StudentHome";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Auth />} />

          <Route exact path="/academy" element={<Home />} />
          <Route exact path="/addacadmey" element={<Add />} />
          <Route exact path="/addacadmey/:id" element={<Add />} />

          <Route exact path="/courses" element={<CourseHome />} />
          <Route exact path="/addCourse" element={<AddCourses />} />
          <Route exact path="/addCourse/:id" element={<AddCourses />} />

          <Route exact path="/students" element={<StudentHome />} />
          <Route exact path="/addstudent" element={<AddStudent />} />
          <Route exact path="/addstudent/:id" element={<AddStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
