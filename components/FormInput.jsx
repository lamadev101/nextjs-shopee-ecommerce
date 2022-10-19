import React from 'react'

const FormInput = (props) => {
  const {...inputProps} = props;

  return (
    <div className='formInput'>
        <input {...inputProps} />
        {/* <small>full name is required</small> */}
    </div>
  )
}

export default FormInput