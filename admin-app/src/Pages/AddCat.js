import React from 'react'
import CustomInput from '../Components/CustomInput'

const AddCat = () => {
  return (
    <div>
      <h3 className='mb-4 title' >Add Category</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Enter Blog Category" />
          <button className='btn btn-success border-0 rounded-3 my-5' type='submit'> 
            Add Category
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddCat