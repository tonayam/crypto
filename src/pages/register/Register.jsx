import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../components/context/Context";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../../data/formValidation";

const Register = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.title = `Broker - Registration`;
  }, []);

  const { userRegDetails, setUserRegDetails } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegDetails({ ...userRegDetails, [name]: value });
  };

  const ageCheck = document.querySelector(`#age-check`);
  const termsCheck = document.querySelector(`#terms-check`);

  if (
    userRegDetails.email !== "" &&
    userRegDetails.name !== "" &&
    userRegDetails.gender !== "" &&
    userRegDetails.password !== "" &&
    ageCheck.checked &&
    termsCheck.checked
  ) {
    document.querySelector(`.submit-btn`).classList.remove(`inactive`);
  } else {
    document.querySelector(`.submit-btn`).classList.add(`inactive`);
  }

  return (
    <section className='register'>
      <article className='register-modal'>
        <h3>Create an Account</h3>
        <div className='register-underline'>
          <div className='inner-line'></div>
        </div>
        <form onSubmit={handleSubmit} className='register-form'>
          {/* REFERRAL EMAIL */}
          <div className='form-control'>
            <input
              type='email'
              placeholder='johnDoe@email.com'
              id='referral-email'
              className='input'
              name='referral'
              value={userRegDetails.referralEmail}
              onChange={handleChange}
              onKeyUp={() => validateEmail(`referral-email`)}
            />
            <label htmlFor='referral-email' className='label'>
              Referral Email (Optional)
            </label>
          </div>
          {/* USER EMAIL */}
          <div className='form-control'>
            <input
              type='email'
              placeholder='johnDoe@email.com'
              id='email'
              className='input'
              name='email'
              value={userRegDetails.email}
              onChange={handleChange}
              onKeyUp={() => validateEmail(`email`)}
              required
            />
            <label htmlFor='email' className='label'>
              Email
            </label>
          </div>
          {/* FULL NAME */}
          <div className='form-control'>
            <input
              type='text'
              placeholder='John Doe'
              id='full-name'
              className='input'
              name='name'
              value={userRegDetails.name}
              onChange={handleChange}
              onKeyUp={() => validateName(`full-name`)}
              required
            />
            <label htmlFor='full-name' className='label'>
              Full name
            </label>
          </div>
          {/* GENDER */}
          <div className='form-control'>
            <input
              type='text'
              placeholder='Male, Female, et al.'
              id='gender'
              className='input'
              name='gender'
              value={userRegDetails.gender}
              onChange={handleChange}
              required
            />
            <label htmlFor='gender' className='label'>
              Gender
            </label>
          </div>
          {/* PASSWORD */}
          <div className='form-control'>
            <input
              type='password'
              placeholder='**********'
              id='password'
              className='input'
              name='password'
              value={userRegDetails.password}
              onChange={handleChange}
              onKeyUp={() => validatePassword(`password`)}
              required
            />
            <label htmlFor='password' className='label'>
              Password
            </label>
          </div>
          {/* CHECKBOXES FOR TERMS AND CONDITIONS */}
          <div className='conditions'>
            <div className='age-condition'>
              <input
                type='checkbox'
                name='age-condition'
                value={`i agree`}
                id='age-check'
                onChange={handleChange}
                onClick={(e) => {
                  console.log(e.target.checked);
                }}
                required
              />
              <label htmlFor='age-condition'>
                I am 18 years of age or older
              </label>
            </div>
            <div className='terms-condition'>
              <input
                type='checkbox'
                name='terms-condition'
                value={`i agree`}
                id='terms-check'
                onChange={handleChange}
                onClick={(e) => {
                  console.log(e.target.checked);
                }}
                required
              />
              <label htmlFor='terms-condition'>
                I agree to <b>Triad Firm Ltd</b>{" "}
                <a href='terms-and-conditions.html' target='_blank'>
                  Terms and conditions
                </a>
              </label>
            </div>
            <div className='emails-condition'>
              <input
                type='checkbox'
                name='emails-condition'
                value={`i agree`}
                onChange={handleChange}
                onClick={(e) => {
                  console.log(e.target.checked);
                }}
              />
              <label htmlFor='emails-condition'>
                I agree to receive <b>Triad Firm Ltd</b> and third party emails
              </label>
            </div>
          </div>
          {/* EXISTING ACCOUNT/SUBMIT BUTTON DIV */}
          <div className='account-submitBtn'>
            <Link to='/login'>
              <p>Already have an account?</p>
            </Link>
            <button className='btn btn-blue submit-btn inactive'>
              Register
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Register;
