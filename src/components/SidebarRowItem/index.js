import React from 'react'
import './SidebarRowItem.scss'
import { CalculatorIcon } from '../../icons'

const SidebarRowItem = ({ title, value }) => {
  return (
    <div className="select-item">
      <CalculatorIcon />
      <span className="item-title">{title}</span>
      <span className="item-value">{value}</span>
    </div>
  )
}

export default SidebarRowItem