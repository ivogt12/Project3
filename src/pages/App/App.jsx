import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as classesAPI from '../../utilities/classes-api';
import StudentPage from '../StudentPage/StudentPage';
import AuthPage from '../AuthPage/AuthPage';
import MyClassesPage from '../MyClassesPage/MyClassesPage';
import NavBar from '../../components/NavBar/NavBar';
import LoginForm from '../../components/LoginForm/LoginForm';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [classItems, setClassItems] = useState([]);
  useEffect(function() {
    async function getClasses() {
        const class_ = await classesAPI.getAll();        
        setClassItems(class_);
    }
    getClasses();

    // async function getCart() {
    //   const cart = await ordersAPI.getCart();
    //   setCart(cart);
    // }
    // getCart();
}, []);

  return (
    <main className="App">
      {
        user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/student" element={<StudentPage classItems={classItems} setClassItems={setClassItems} user={user} />} />
            <Route path="/classes" element={<MyClassesPage classItems={classItems} setClassItems={setClassItems} />} />
            <Route path="/*" element={<Navigate to="classes" />} />
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