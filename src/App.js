import img1 from './images/rectangle1.png'
import amazonLogo from './images/amazonLogo.png'
import treeLogo from './images/tree.png'

import Input from './Components/input'
import Button from './Components/button'
import { useState } from 'react'
import './App.css';


function App() {

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false);
  const[errorMsg,setErrorMsg]=useState('')
 

  return (
    <div className="App">
      <img src={img1} alt='tree' className='background_image' />
      <div className='card'>
        <div className='head'>
          <div className='amazon'><img src={amazonLogo} alt='logo' className='amazonLogo'/></div>
        </div>
        <div className='body'>
 <h1 className='login'>Login</h1>
        <img src={treeLogo} alt='tree logo' className='treeLogo' />
        <Input type='email' placeholder='Email' errorMsg={errorMsg} setValue={ setEmail} error={emailError} value={email} />
        <Input type='password' placeholder='Password'  />
        <button className='signIn' onClick={() => {
         var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if (email === '')
          {
            setEmailError(true)
            setErrorMsg('The email field is required')
          }
          else if (!email.match(validRegex))
          {
            setEmailError(true)
            setErrorMsg('Invaid Email')
          }
          
        }}>Sign In</button>
        <div className='forgotPassword'>
          <p className='fontJosfinSan'>Forgot Password?</p>
          <p className='fontJosfinSan colorD9'>New User? Sign Up</p>
        </div>
        <p className='fontJosfinSan margin'>or</p>
<Button name='CONTINUE WITH GOOGLE' logo='google'/>
      <Button name='CONTINUE WITH FACEBOOK'/> 
        </div>
       
      </div>
    </div>
  );
}

export default App;
