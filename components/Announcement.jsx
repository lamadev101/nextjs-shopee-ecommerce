import {Form} from '.'
import { useStateContext } from '../context/StateContext';
import { loginInput, registerInput } from '../pages/api/data';

const Announcement = () => {
  const {setOpenLogin, setOpenSignUp, openLogin, openSignUp} = useStateContext();

  return (
    <div className='announcement'>
        <div className="wrapper">
            <h4 className='msg'>Super Deal ! Free shipping on orders over $50 </h4>
            <ul>
                <li>Lng:Eng</li>
                <li>Customer Care</li>
                <li>Help</li>
                <li onClick={()=>setOpenSignUp(!openSignUp)}>Register</li>
                <li onClick={()=>setOpenLogin(!openLogin)}>Sign In</li>
            </ul>
        </div>
        {openSignUp && <Form inputs ={registerInput} btnValue="Register" title="Create an Account" />}
        {openLogin && <Form inputs ={loginInput} btnValue="Login" title="Login Now" />}
    </div>
  )
}

export default Announcement