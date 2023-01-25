import React, { useContext } from 'react'
import './SideBar.scss'
import { RowsIcon } from '../../icons'
import SidebarButton from '../SidebarButton'
import SidebarRowItem from '../SidebarRowItem'
import AGContext from '../../lib/context'

const SideBar = () => {
  const { state } = useContext(AGContext)
  const { id = '0', data = {} } = state.currentRow
  if (!Object.keys(data).length) return null
  return (
    <div className={`sidebar-wrapper`}>
      <div className="side-buttons">
        <SidebarButton isRowIcon />
      </div>
      <div className="tool-panel-wrapper">
        <div className="tool-panel-header">
          <RowsIcon className="row-icon" />
          <h3>Row: {+id + 1}</h3>
        </div>
        <div className="select-list">
          {Object.entries(data).map((el) => <SidebarRowItem key={el[0]} title={el[0]} value={el[1]} />)}
        </div>
      </div>
    </div>
  )
}

export default SideBar