import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Treatments from './pages/Treatments/Treatments';
import AddTreatments from './pages/Treatments/AddTreatments';
import Doctors from './pages/Doctors/Doctors';
import AddDoctors from './pages/Doctors/AddDoctors';
import AddFacility from './pages/Facilities/AddFacility';
import Facilities from './pages/Facilities/Facilities';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Auth/Login';
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh';

function App() {
  const loading = useLoadingWithRefresh();
  return (
    <Router>
      <ToastContainer />
      <Header />
      {/* {loading ? (
        <h1>Sign In to continue</h1>
      ) : ( */}
        <Routes>
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/add-treatments" element={<AddTreatments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/add-doctors" element={<AddDoctors />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/add-facility" element={<AddFacility />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      {/* )} */}
    </Router>
  );
}

export default App;
