import React from 'react'
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { FormInput } from '.'
import { useStateContext } from '../context/StateContext';

const Register = ({inputs, btnValue, title}) => {
    const {setOpenLogin, setOpenSignUp, openLogin, openSignUp} = useStateContext();
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleForm = ()=>{
      setOpenLogin(!openLogin);
      setOpenSignUp(!openSignUp);
    }
    const handleClose = ()=>{
      setOpenLogin(false);
      setOpenSignUp(false);
    };


  return (
    <div className='form'>
        <div className="container">
          <h3>{title}</h3>
          <AiOutlineCloseSquare className='icon' onClick={handleClose} />
          <form onSubmit={handleSubmit}>
              {inputs.map((input, idx)=><FormInput key={idx} {...input}/>)}
              <div className='btnNotice'>
                <button className='btn' type='submit'>{btnValue}</button>
                {btnValue === "Register" ? <span>Do you have an account already? <b onClick={handleForm}>Login Now</b> </span> :
                <span>Are you new? <b onClick={handleForm}>Create an account</b> </span>}
              </div>
          </form>
        </div>
    </div>
  )
}

export default Register