import React, {Suspense, lazy} from 'react'
import { Routes, Route } from 'react-router-dom'
import Prefetch from './features/auth/Prefetch'
import ResultsList from './components/Results';
import NotFoundPage from './components/NotFoundPage';
const Layout= lazy(() => import('./components/Layout'));
const Public = lazy(() => import('./components/Public'));
const Login = lazy(() => import('./features/auth/Login'));
const Instructions  = lazy(() => import('./components/Instructions'));
const Questionnaire  = lazy(() => import('./components/Questionnaire'));
const ThxPage  = lazy(() => import('./components/ThxPage'));
const PatientTwo= lazy(() => import('./components/PatientTwo'));
const PatientThree= lazy(() => import('./components/PatientThree'));
const PatientFour= lazy(() => import('./components/PatientFour'));
const PatientFive= lazy(() => import('./components/PatientFive'));
const PatientOne= lazy(() => import('./components/PatientOne'));

function App() {
  return (
    <Suspense fallback={<div className="loader"></div>}>
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
          <Route path="thankspage" element={<ThxPage/>} />
          <Route element={<Prefetch />}>
              <Route path="notes">
                <Route index element={<ResultsList />} />
              </Route>
          </Route>
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </Suspense>

  );
}

export default App;
