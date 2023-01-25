import React, { useContext } from 'react'
import Modal from '../Modal'
import AGContext from '../../lib/context'

const UsersListModal = () => {
  const { state, dispatch } = useContext(AGContext)
  return (
    <Modal modalIsOpened={state.usersListModal} setmodalIsOpened={() => dispatch({ type: 'USER_LIST_MODAL', payload: false })}>
      <ul className='users-list'>
        {state?.usersName.map(el => (<li key={el} className='user-item'>{el}</li>))}
      </ul>
    </Modal>
  )
}

export default UsersListModal