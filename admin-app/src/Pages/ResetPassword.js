import React from 'react'
import CustomInput from '../Components/CustomInput'

const ResetPassword = () => {
  return (
    <div className='py-5' style={{background :"#ffd333" , minHeight: "100vh"}}>
      <br />
      <br />
      <br />
      <br />
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center'>ResetPassword</h3>
        <p className='text-center'>Pleases Enter your new Password </p>
       <form action="">
       <CustomInput type="password" label="New Password" id="email" />
        <CustomInput type="password" label="Confirm Password" id="pass" />
        <button className='border-0 px-3 py-2 text-white fw-bold w-100' style={{background : "#ffd333"}} type='submit'>ResetPassword</button>
       </form>
      </div>
      
    </div>
  )
}

export default ResetPassword