import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import HomePage from './Components/HomePage/HomePage';
import { BioPage } from './Components/BioPage/BioPage';

export const Root = () => (
  <Router>
      <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
          <Route path='bio' element={<BioPage />} />
        </Route>
      </Routes>
  </Router>
)