import { Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <>
      <Routes>
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
