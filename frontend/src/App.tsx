import { Routes, Route, Navigate } from 'react-router';
import Landing from './pages/landing';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import SharedLayout from './layout/sharedLayout';
import FeaturesPage from './pages/features/features';
import ForgotPassword from './pages/auth/forgotPassword';
import ResetPassword from './pages/auth/resetPassword';
import Dashboard from './pages/dashboard/dashboard';
import Overview from './pages/dashboard/overview';
import { Applications } from './pages/dashboard/applications';
import { ApplicationDetail } from './components/dashboard/applications/appllicationDetail';
import { ApplicationForm } from './components/dashboard/applications/applicationForm';
import NotFound from './pages/notFound';
import { Settings } from './pages/dashboard/settings';
import { AuthProvider } from '@/hooks/use-auth';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Landing />} />
          <Route path='features' element={<FeaturesPage />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='reset-password' element={<ResetPassword />} />
        </Route>

        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Navigate to='overview' replace />} />
          <Route path='overview' element={<Overview />} />

          {/* Applications Routes */}
          <Route path='applications'>
            <Route index element={<Applications />} />
            <Route path='new' element={<ApplicationForm />} />
            <Route path=':id'>
              <Route index element={<ApplicationDetail />} />
              <Route path='edit' element={<ApplicationForm />} />
            </Route>
          </Route>

          <Route path='settings' element={<Settings />} />
        </Route>

        {/* 404 route */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
