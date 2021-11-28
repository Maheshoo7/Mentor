import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginPage from './components/login'
import SignUp from './components/signup';
import ForgotPassword from './components/forgotPassword'
import MentorHomePage from './components/mentor/mentorHomePage';
import Dashboard from './components/mentor/dashboard'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/home' element={<MentorHomePage />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
