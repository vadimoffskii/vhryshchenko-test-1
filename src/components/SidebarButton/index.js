import React from 'react'
import './SideBarButton.scss'
import { ColumnsIcon, RowsIcon } from '../../icons'

const SidebarButton = ({ isRowIcon, isColIcon, ...props }) => {
  // side-button-active
  return (
    <button type='button' className="side-button" {...props}>
      {isColIcon && <ColumnsIcon className="col-icon" />}
      {isRowIcon && <RowsIcon className="row-icon" />}
      <span className="col-icon-tooltip">{isColIcon ? 'Columns' : 'Rows'}</span>
    </button >
  )
}

export default SidebarButton