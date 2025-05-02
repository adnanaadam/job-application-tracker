import { Routes, Route } from 'react-router';
import Landing from './pages/landing';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import SharedLayout from './layout/sharedLayout';
import DashboardPage from './pages/dashboard';
import Applications from './pages/dashboard/applications/applications';
import DashboardLayout from './layout/dashboardLayout';
import Interviews from './pages/dashboard/interviews/interview';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Landing />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>

      <Route path='/dashboard' element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path='applications' element={<Applications />} />
        <Route path='interviews' element={<Interviews />} />
  {/* <Route path='offers' element={<Offers />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
