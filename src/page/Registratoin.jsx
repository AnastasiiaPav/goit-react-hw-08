import { useDispatch } from 'react-redux';
import { registerThunk } from 'Redux/userOperations';

const Registration = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    dispatch(registerThunk(data));
    event.currentTarget.reset();
  };
  return(
    <form onSubmit={onSubmit}>
      <label>
        Your name
        <input type="text" name="name" placeholder="Enter your name" />
      </label>
      <label>
        Your email
        <input type="email" name="email" placeholder="Enter your email" />
      </label>
      <label>
        Create password
        <input type="password" name="password" placeholder="Your password, please" />
      </label>
      <button type="submit">Sign up</button>
    </form>
  )
};

export default Registration;
