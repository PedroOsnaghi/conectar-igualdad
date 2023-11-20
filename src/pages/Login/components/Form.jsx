import { useState } from 'react';
import '../../../styles/Form.css';

const Form = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const showLoginForm = () => {
    setIsLoginForm(true);
    setFormClasses(true);
  };

  const showSignUpForm = () => {
    setIsLoginForm(false);
    setFormClasses(false);
  };

  const setFormClasses = (isActive) => {
    const elements = document.querySelectorAll('.login, .welcome, .sign_in, .btn, .sign_up');
    elements.forEach(element => {
      if (isActive) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  };

  return (
    <div className='container'>
      <div className={`page ${isLoginForm ? 'show' : 'hide'}`}>
        <div className={`welcome ${isLoginForm ? 'show' : 'hide'}`}>
          <h2>Welcome Back!</h2>
          <p>Hello Dear, I am Robin Gautam. How it is?</p>
          <button className="sign_in" onClick={showLoginForm}>Sign In</button>
          <button className="btn" onClick={showSignUpForm}>Sign Up</button>
        </div>
        <div className={`sign_up ${isLoginForm ? 'hide' : 'show'}`}>
          <form>
            <h2>Sign Up your Account</h2>
            <input type="text" name="name" placeholder="Full Name" required/>
            <input type="email" name="email" placeholder="Email" required/>
            <input type="password" name="password" placeholder="Password" required/>
            <input type="submit" name="sign_up" value="Sign Up" className="up"/>
          </form>
        </div>
        <div className={`login ${isLoginForm ? 'show' : 'hide'}`}>
          <form>
            <h2>Login your Account</h2>
            <input type="email" name="email" placeholder="Email" required/>
            <input type="password" name="password" placeholder="Password" required/>
            <input type="submit" name="sign_in" value="Sign In" className="in"/>		
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
