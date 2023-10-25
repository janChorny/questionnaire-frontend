import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login';
import Prefetch from './features/auth/Prefetch'
import Instructions from './components/Instructions';
import Questionnaire from './components/Questionnaire';
import ThxPage from './components/ThxPage';
import ResultsList from './components/Results';
import PatientOne from './components/PatientOne';
import PatientTwo from './components/PatientTwo';
import PatientThree from './components/PatientThree';
import PatientFour from './components/PatientFour';
import PatientFive from './components/PatientFive';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="public" index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="instructions" element={<Instructions/>} />
        <Route path="patient-one" element={<PatientOne/>} />
        <Route path="patient-two" element={<PatientTwo/>} />
        <Route path="patient-three" element={<PatientThree/>} />
        <Route path="patient-four" element={<PatientFour/>} />
        <Route path="patient-five" element={<PatientFive/>} />
        <Route path="questionnaire" element={<Questionnaire/>} />
        <Route path="thxPage" element={<ThxPage/>} />

        <Route element={<Prefetch />}>
            <Route path="notes">
              <Route index element={<ResultsList />} />
            </Route>
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
