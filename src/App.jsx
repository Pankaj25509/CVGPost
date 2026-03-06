import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage'; 
import BookingPage from './BookingPage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* When the link is just /, show the home page */}
        <Route path="/" element={<LandingPage />} />

        {/* When the link is /booking, show the booking page */}
        <Route path="/booking" element={<BookingPage />} />
        
        {/* If the link is wrong, just go back home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;