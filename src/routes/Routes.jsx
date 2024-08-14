import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import App from '../App'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,

  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
 
])
