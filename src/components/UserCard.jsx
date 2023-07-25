import "./styles/UserCard.css"

const UserCard = ({user, deleteUserById, setUpdateInfo, handleOpenForm, setModalClose}) => {


  const handleDelete = () => {
    deleteUserById('/users', user.id)
    setModalClose(false)
  }

  const handleUpdate = () => {
    setUpdateInfo(user)
    handleOpenForm()
  }

  return (
    <article>
      <div className="userCard-Container">
        <h2 className="userCard_Name">{user.first_name} {user.last_name}</h2>
        <ul className="userCard_info">
          <li className="userCard_infoBirthday">
              <span className="userCard_infoBirthday-icon"><i className='bx bx-gift'></i> Birthday</span>
              <span>{user.birthday}</span>
          </li>
          <li className="userCard_infoEmail">
              <span className="userCard_infoEmail-icon"><i className='bx bx-envelope'></i> Email</span>
              <span>{user.email}</span>
          </li>
        </ul>
        <footer className="userCard_btn">
          <button className='userCard_btn-Erase' onClick={handleDelete}><i className='bx bxs-trash'></i></button>
          <button className="userCard_btn-Write" onClick={handleUpdate}><i className='bx bx-pencil'></i></button>
        </footer>
      </div>
    </article>
  )
}

export default UserCard
