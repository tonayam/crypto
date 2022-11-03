import React, { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.title = `Broker - Login`;
  }, []);

  const handleSubnit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='login'>
      <article className='login-modal'>
        <h3>Login {window.innerWidth > 1199 && `Authentication`} </h3>
        <div className='login-underline'>
          <div className='inner-line'></div>
        </div>
        <form onSubmit={handleSubnit} className='login-form'>
          <div className='form-control'>
            <input
              type='email'
              placeholder='johnDoe@email.com'
              id='email'
              className='input'
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
            />
            <label htmlFor='password' className='label'>
              Password
            </label>
          </div>

          <div className='password-submitBtn'>
            <p>Forgot password?</p>
            <button className='btn btn-blue'>Login</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Login;
