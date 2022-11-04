import React, { useEffect } from "react";
import { validateEmail, validatePassword } from "../../data/formValidation";
import { useGlobalContext } from "../../components/context/Context";

const Login = () => {
  const { userLoginDetails, setUserLoginDetails } = useGlobalContext();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.title = `Broker - Login`;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserLoginDetails({ ...userLoginDetails, [name]: value });
  };

  return (
    <section className='login'>
      <article className='login-modal'>
        <h3>Login {window.innerWidth > 1199 && `Authentication`} </h3>
        <div className='login-underline'>
          <div className='inner-line'></div>
        </div>
        <form onSubmit={handleSubmit} className='login-form'>
          <div className='form-control'>
            <input
              type='email'
              placeholder='johnDoe@email.com'
              id='email'
              className='input'
              name='email'
              value={userLoginDetails.email}
              onChange={handleChange}
              onKeyUp={() => validateEmail(`email`)}
              required
            />
            <label htmlFor='email' className='label'>
              Email
            </label>
          </div>
          <div className='form-control'>
            <input
              type='password'
              placeholder='**********'
              id='password'
              className='input'
              name='password'
              value={userLoginDetails.password}
              onChange={handleChange}
              onKeyUp={() => validatePassword(`password`)}
              required
            />
            <label htmlFor='password' className='label'>
              Password
            </label>
          </div>

          <div className='password-submitBtn'>
            <p>Forgot password?</p>
            <button className='btn btn-blue submit-btn'>Login</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Login;
