import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import components */
import Main from './Main';
import Login from './Login';
import Register from './Register';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExist } from '../helper/helper';


/** react routes */
const router = createBrowserRouter([
  {
    path : '/main',
    element : <Main></Main>
  },
  {
    path : '/login',
    element : <Login></Login>
  },
  {
    path : '/register',
    element : <Register></Register>
  },
  {
    path : '/quiz',
    element : <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path : '/result',
    element : <CheckUserExist><Result /></CheckUserExist>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;