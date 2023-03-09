import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import StudentPage from '../StudentPage/StudentPage';
import AuthPage from '../AuthPage/AuthPage';
import MyClassesPage from '../MyClassesPage/MyClassesPage';
import NavBar from '../../components/NavBar/NavBar';
import LoginForm from '../../components/LoginForm/LoginForm';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [classItems, setClassItems] = useState();
  console.log(classItems)

  return (
    <main className="App">
      {
        user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/student" element={<StudentPage classItems={classItems} setClassItems={setClassItems} />} />
            <Route path="/classes" element={<MyClassesPage classItems={classItems} setClassItems={setClassItems} />} />
          </Routes>
        </>
        : 
        <>
        <AuthPage setUser={setUser} /> <LoginForm setUser={setUser} />
        </>
      }
    </main>
  );
}