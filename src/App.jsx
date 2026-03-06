import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage'; 
import BookingPage from './BookingPage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;