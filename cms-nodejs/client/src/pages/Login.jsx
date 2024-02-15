import React, { useEffect, useState } from 'react'
import iconImg from '../assets/twemoji_pig-face.png'
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/localStorage';

const Login = () => {
 const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  // const [isLogin, setIsLogin] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("username:", username);
    console.log("password:", password);
    const result = await login(username, password);
    if(result.success===200){
      navigate('/admin');
    }else {
      console.log("resultLogin:", result);
    }
   // navigate('/admin');
    setUsername('');
    setPassword('');
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      const authenticated = await isAuthenticated();
      if (authenticated) {
         navigate('/admin');
      } else {
      }
    };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    checkAuthentication();
  }, []);
  return (
    <div className='h-screen w-screen items-center bg-edit flex justify-center'>
      <form className="w-1/4 h-auto bg-gray-100 p-8 rounded shadow">
        <img src={iconImg} alt='pig-icon' className='w-[100px] h-[100px]' />
        <div className="mb-4 mt-4">
          <label htmlFor="username" className="block mb-2">Username</label>
          <input
            type="text"
            id="username"
            className="w-full border rounded py-2 px-3"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="w-full border rounded py-2 px-3"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="flex items-center mt-5">
          <input
            type="checkbox"
            id="myCheckbox"
            className="form-checkbox h-5 w-5 text-blue-500"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="myCheckbox" className="ml-2">
            Remember me !
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 mt-5 rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Log in
        </button>
      </form>
    </div>
  )
}

export default Login