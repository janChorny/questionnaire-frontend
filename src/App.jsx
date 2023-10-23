import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login';
import Prefetch from './features/auth/Prefetch'
import Instructions from './components/Instructions';
import Questionnaire from './components/Questionnaire';
import ThxPage from './components/ThxPage';
import ResultsList from './components/Results';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="public" index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="instructions" element={<Instructions/>} />
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
