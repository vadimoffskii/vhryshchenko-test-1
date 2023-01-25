import React from 'react'
import Portal from '../Portal'
import './Modal.scss'


const Modal = ({ modalIsOpened, setmodalIsOpened, children }) => {
  if (!modalIsOpened) return null
  return (
    <Portal>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <div onClick={setmodalIsOpened} className="modal-close-btn">X</div>
          </div>
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default Modal