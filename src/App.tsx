
import './app.scss';
import { Routes, Route } from "react-router-dom";
import DndHomePage from './pages/DndHome';
import DndDetails from './pages/DndDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DndHomePage />} />
      <Route path="details" element={<DndDetails />} />
    </Routes>
  )
}

export default App;