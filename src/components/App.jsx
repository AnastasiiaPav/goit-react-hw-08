import { useDispatch} from 'react-redux';
import { lazy } from 'react';
import { refreshThunk } from 'Redux/userOperations';
import { Route, Routes } from 'react-router-dom';
import Loyout from 'page/Loyout';
import { useEffect } from 'react';
import RestrictedRoute from './RestRoute';
import PrivateRoute from './PrivateRoute';


const Home = lazy (() => import('page/Home'))
const Login =  lazy (() => import('page/Login'))
const Register = lazy(() => import('page/Registratoin'))
const Contacts = lazy(() => import('page/Contact'))

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);


  return (
    <Routes>
    <Route path="/" element={<Loyout />}>
      <Route index element={<Home />} />
      <Route
        path="/login"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<Login />} />
        }
      />
      <Route
        path="/register"
        element={
          <RestrictedRoute redirectTo="/registr" component={<Register />} />
        }
      />
      <Route
        path="/contacts"
        element={
          <PrivateRoute redirectTo="/login" component={<Contacts />} />
        }
      />
    </Route>
    <Route path="*" element={<h1>Page not found</h1>} />
  </Routes>
  );
};
