import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/FormUser.css'

const FormUser = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, closeForm, setCloseForm}) => {



  const {register, reset, handleSubmit} = useForm()

  useEffect(() => {
    reset(updateInfo)
  }, [updateInfo])

  const submit = data => {
    if (updateInfo) {
      // update
      updateUserById('/users', updateInfo.id, data)
      setUpdateInfo()
    }else{
      // create
      createNewUser('/users', data)
    }
    reset({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      birthday: ''
    })
  }
  
  const handleCloseForm = () => {
    setCloseForm(true)
  }

  return (
    <div onClick={handleCloseForm} className={`formUser-global ${closeForm && 'formUser__closeForm'}`}>
      <form onClick={e => e.stopPropagation} className='formUser' onSubmit={handleSubmit(submit)}>
        <h2 className='formUser__title'>{updateInfo ? 'Update' : 'New User'}</h2>
        <div onClick={handleCloseForm} className='formUser__close'>X</div>
        <div className='formUser__container'>
          <label className='formUser__label' htmlFor="first_name">First Name</label>
          <input className='formUser__input' {...register('first_name')} type="text" id="first_name" />
        </div>
        <div className='formUser__container'>
          <label className='formUser__label' htmlFor="last_name">Last Name</label>
          <input className='formUser__input' {...register('last_name')} type="text" id="last_name" />
        </div> 
        <div className='formUser__container'>
          <label className='formUser__label' htmlFor="email">Email</label>
          <input className='formUser__input' {...register('email')} type="email" id="email" />
        </div>
        <div className='formUser__container'>
          <label className='formUser__label' htmlFor="password">Password</label>
          <input className='formUser__input' {...register('password')} type="password" id="password" />
        </div>
        <div className='formUser__container'>
          <label className='formUser__label' htmlFor="birthday">Birthday</label>
          <input className='formUser__input' {...register('birthday')} type="date" id="birthday" />
        </div>
        <button className='formUser__btn'>{updateInfo ? 'Update this user' : 'Add a new user'}</button>
      </form>
    </div>
  )
}

export default FormUser
