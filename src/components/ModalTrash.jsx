import './styles/ModalTrash.css'
import { useState } from 'react'

export default function ModalTrash({modalClose, setModalClose}) {

  // const [modalClose, setModalClose] = useState(true)
  const handleClose = () => {
    setModalClose(true)
  }

  return (
      <div className={`modalTrash_container ${modalClose && 'modalTrash_close'}`}>
        <div className='modalTrash_info'>
            <h2>Delete User</h2>
            <p>El Usuario se ha eliminado</p>
            <button onClick={handleClose} className='modalTrash_btn'>Aceptar</button>
        </div>
      </div>  
  )
}
