import './css/App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Title from './pages/title';
import SignUp from './pages/signup';
import Character from './pages/character';
import NewCharacter from './pages/new_character';
import MyCharacters from './pages/my_characters';
import ManuallyCreate from './pages/manually_create';
import Page from "./components/Page";
import { useEffect, useState } from 'react';

export default function App() {
    const [user, setUser] = useState({
        "grant_type": "password",
        "client_id": "2",
        "client_secret": "hLsOkd8UU2AMsfYaYKQ1gG2RaVqw5ejjqxHHv4Jl",
        "password": "changeme",
        "username": "jhalljhall1@gmail.com",
        "scope": ""
    });
    const [headers, setHeader] = useState({
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Credentials": true

    });
    const navigate = useNavigate();
    const [token, setToken] = useState('');
    useEffect(() => {
        let sessionToken = window.sessionStorage.getItem('uAuth');
        console.log(sessionToken);
        if (sessionToken){
            setToken(sessionToken);
        }
    }, []);
    useEffect(() => {
            if(token.length > 0){
             navigate('/character');
            } else {
            navigate('/');
        }

    }, [token]);
  return (
        <Routes>
            <Route element={<Page />}>
                <Route index path='/' element={
                    <Title user={user} headers={headers} setToken={setToken} />
                } />
                <Route path='/signup' element={
                    <SignUp setToken={setToken} />
                } />
                <Route path='/character' element={
                    <Character user={user} headers={headers} setToken={setToken} token={token} />
                } />
                <Route path='/new_character' element={
                    <NewCharacter user={user} headers={headers} token={token} />
                } />
                <Route path='/my_characters' element={
                    <MyCharacters user={user} headers={headers} token={token} />
                } />
                <Route path='/manually_create' element={
                    <ManuallyCreate user={user} headers={headers}  token={token} />
                } />
            </Route>
        </Routes>
  );
}