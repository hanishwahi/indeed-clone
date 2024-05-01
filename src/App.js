import './App.css';
import './Responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Signup from './components/Signup';
import Profile from './Pages/Profile/Profile';
import Settings from './Pages/Settings/Settings';
import SavedJobs from './Pages/SavedJobs/SavedJobs';
import JobPost from './Pages/EmployeerJobPost/JobPost';
import Login from './components/Login';
import Footer from './components/Footer';
import JobFeedTab from './Pages/Home/JobFeedTab';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/job/:q/:l/:jpi' element={<JobFeedTab />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/account-settings" element={<Settings />} />
          <Route path="/saved-jobs" element={<SavedJobs />} />
          <Route path='/job-post' element={<JobPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
