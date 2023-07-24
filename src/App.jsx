import { useState, useEffect } from 'react'
import useFetch from './hooks/useFetch'
import './App.css'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'


function App() {
 
  const [updateInfo, setUpdateInfo] = useState()
  const [closeForm, setCloseForm] = useState(true)

   const baseUrl = 'https://users-crud.academlo.tech'

   const [users, getAllUsers, createNewUser, deleteUserById, updateUserById] = useFetch(baseUrl, setCloseForm)

  useEffect(() => {
    getAllUsers('/users')
  }, [])

  console.log(users)

  const handleOpenForm = () => {
    setCloseForm(false)
  }

  return (
    < >
      <h1>USUARIOS CRUD</h1>
      <div className='formUser_btnContainer'>
        <button className='formUser__btn' onClick={handleOpenForm}><i className='bx bxs-add-to-queue'></i>  Create New User</button>
      </div>
      

      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
      />
      <div className='userCard_globalContainer'>
        {
          users?.map(user => (
            <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            handleOpenForm={handleOpenForm}
            />
          ))
        } 
      </div>

      <footer>
        <h3>Todos los derechos reservados</h3>
    
      </footer>
      
    </>
  )
}

export default App
