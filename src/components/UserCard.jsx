

const UserCard = ({user, deleteUserById, setUpdateInfo, handleOpenForm}) => {

  const handleDelete = () => {
    deleteUserById('/users', user.id)
  }

  const handleUpdate = () => {
    setUpdateInfo(user)
    handleOpenForm()
  }

  return (
    <article>
      <h2>{user.first_name} {user.last_name}</h2>
      <hr />
      <ul>
        <li>
            <span>Birthday:</span>
            <span>{user.birthday}</span>
        </li>
        <li>
            <span>Email:</span>
            <span>{user.email}</span>
        </li>
      </ul>
      <footer>
        <button onClick={handleDelete}><i className='bx bxs-trash'></i></button>
        <button onClick={handleUpdate}><i className='bx bx-pencil'></i></button>
      </footer>
    
    </article>
  )
}

export default UserCard
