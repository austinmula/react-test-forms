import { Routes, Route } from 'react-router-dom';
import CheckboxRadio from './Pages/CheckboxRadio';
import Main from './Pages/Main';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className='bg-slate-300 w-full flex items-center justify-center min-h-screen'>
      <div className='bg-white w-80 h-full'>
        <Routes>
          <Route path='sign-in' element={<SignIn />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='/' element={<Main />} />
          <Route path='form' element={<CheckboxRadio />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
