import './App.css';
import { Routes, Route } from 'react-router';

import MainPage from './pages/MainPage';
import FavoritesPage from './pages/FavoritesPage';
import MainLayout from './pages/MainLayout';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <MainLayout />
                        </ProtectedRoute>
                    }>
                    <Route index element={<MainPage />} />
                    <Route path="favorites" element={<FavoritesPage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
            </Routes>

            {/* <MainPage /> */}
            {/* <FavoritesPage /> */}
        </div>
    );
}

export default App;
