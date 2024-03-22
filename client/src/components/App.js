import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import components */
import Main from './Main';
import Login from './Login';
import Register from './Register';
import Quiz from './Quiz';
import Result from './Result';
import ResultTable from './ResultTable';

/** react routes */
const router = createBrowserRouter([
  {
    path : '/main',
    element : <Main></Main>
  },
  
  {
    path : '/',
    element : <Login></Login>
  },
  {
    path : '/register',
    element : <Register></Register>
  },
  {
    path : '/quiz',
    element : <Quiz></Quiz>
  },
  {
    path : '/result',
    element : <Result></Result>
  },
  {
    path : '/resultTable',
    element : <ResultTable></ResultTable>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;