import './App.css';
import ChristmasTreePage from './pages/ChristmasTreePage';
import BracketsPage from './pages/BracketsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ChristmasTreePage />} />
                <Route path="brackets" element={<BracketsPage />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
