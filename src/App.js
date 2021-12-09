import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from './pages/title';
import NewCharacter from './pages/new_character';
import Character from './pages/character';
import SignUp from './pages/signup';
import ManuallyCreate from './pages/manually_create';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index path='/' element={<Title />} />
            <Route path='new_character' element={<NewCharacter />} />
            <Route path='character' element={<Character />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='manually_create' element={<ManuallyCreate />} />
        </Routes>
    </BrowserRouter>
  );
}