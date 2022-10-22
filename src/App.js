import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginOptionPage from './pages/LoginOptionPage';
import StudentSignUpPage from './pages/StudentSignUpPage';
import TeacherSignUpPage from './pages/TeacherSignUpPage';
import StudentLoginPage from './pages/StudentLoginPage';
import TeacherLoginPage from './pages/TeacherLoginPage';
import ViewTeacherProfilePage from './pages/ViewTeacherProfilePage';
import SendRewardPage from './pages/SendRewardPage';
import TeacherWalletPage from './pages/TeacherWalletPage';
import StudentWalletPage from './pages/StudentWalletPage';
import ListOfSchoolsPage from './pages/ListOfSchoolsPage';
import { AllTeachersInASchool } from './components/AllTeachersInASchool/AllTeachersInASchool';
import EditTeacherProfile from './components/EditProfile/EditTeacherProfile';
import StudentNotification from './components/Notification/StudentNotification';
import StudentNotificationPage from './pages/StudentNotificationPage';
import TeacherNotificationPage from './pages/TeacherNotificationPage';
import EditStudentPage from './pages/EditStudentPage';
import EditTeacherPage from './pages/EditTeacherPage';
import StudentWallet from './components/StudentWallet/StudentWallet';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public routes */}
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginOptionPage />} />
        <Route path='/student/login' element={<StudentLoginPage />} />
        <Route path='/teacher/login' element={<TeacherLoginPage />} />
        <Route path='/student/signup' element={<StudentSignUpPage />} />
        <Route path='/teacher/signup' element={<TeacherSignUpPage />} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/about' element={<AboutPage />} />

        {/* Protected routes */}
        <Route path='/student/viewTeacherProfile' element={<ProtectedRoute><ViewTeacherProfilePage /></ProtectedRoute>} />
        <Route path='/student/sendReward' element={<ProtectedRoute><SendRewardPage /></ProtectedRoute>} />
        <Route path='/teacher/dashboard' element={<ProtectedRoute><TeacherWalletPage /></ProtectedRoute>} />
        <Route path='/student/dashboard' element={<ProtectedRoute><StudentWalletPage /></ProtectedRoute>} />
        <Route path='/student/schools' element={<ProtectedRoute><ListOfSchoolsPage /></ProtectedRoute>} />
        <Route path='/student/allteachers' element={<ProtectedRoute> <AllTeachersInASchool /></ProtectedRoute>} />
        <Route path='/teacher/editprofile' element={<ProtectedRoute><EditTeacherPage /></ProtectedRoute>} />
        <Route path='/student/notification' element={<ProtectedRoute><StudentNotificationPage /></ProtectedRoute>} />
        <Route path='/teacher/notification' element={<ProtectedRoute><TeacherNotificationPage /> </ProtectedRoute>} />
        <Route path='/student/editprofile' element={<ProtectedRoute><EditStudentPage /></ProtectedRoute>} />
        <Route path='/student/overview' element={<ProtectedRoute><StudentWalletPage /></ProtectedRoute>} />
        <Route path='/teacher/overview' element={<ProtectedRoute><TeacherWalletPage /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;