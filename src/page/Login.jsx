import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginThunk } from 'Redux/userOperations';

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    dispatch(loginThunk(data));
    event.currentTarget.reset();
  };

  return(
    <form onSubmit={onSubmit}>
    <label>
      Login
      <input type="email" name="email" placeholder="Enter your email" />
    </label>
    <label>
      Password
      <input type="password" name="password" placeholder="Your password, please" />
    </label>
    <button type="submit">Sign in</button>
    <Link to={'/register'}>Create account</Link>
  </form>
  )
};

export default Login