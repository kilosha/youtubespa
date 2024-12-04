import './App.css';
import { Routes, Route } from 'react-router';

import MainPage from './pages/MainPage';
import FavoritesPage from './pages/FavoritesPage';
import MainLayout from './pages/MainLayout';
import LoginPage from './pages/LoginPage';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path="favorites" element={<FavoritesPage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
            </Routes>

            {/* <MainPage /> */}
            {/* <FavoritesPage /> */}
        </>
    );
}

export default App;
