import React, { useContext } from 'react'
import AGContext from '../../lib/context'

const Header = () => {
  const { dispatch } = useContext(AGContext)

  return (
    <div className="header">
      <button className="header-button" onClick={() => dispatch({ type: 'USER_LIST_MODAL', payload: true })}>Users</button>
      <button className="header-button" onClick={() => dispatch({ type: 'GROUP_BY_MODAL', payload: true })}>Group</button>
    </div>
  )
}

export default Header