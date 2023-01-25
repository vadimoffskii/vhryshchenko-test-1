import React, { useCallback, useContext, useState } from 'react'
import Modal from '../Modal'
import AGContext from '../../lib/context'
import { GroupByIcon, TrashIcon } from '../../icons'
import './GroupByModal.scss'

const GroupByModal = () => {
  const { state, dispatch, gridRef } = useContext(AGContext)
  const [values, setValues] = useState('')

  const onGroupByheaderName = useCallback((name) => {
    if (!name) return
    gridRef.current?.columnApi.applyColumnState({ state: [{ colId: name, rowGroup: true }] })
    dispatch({ type: 'GROUP_BY_MODAL', payload: false })
  }, [gridRef, dispatch])

  const onDeleteByheaderName = useCallback((name) => {
    if (!name) return
    gridRef.current?.columnApi.applyColumnState({ state: [{ colId: name, rowGroup: false }] })
  }, [gridRef])

  return (
    <Modal modalIsOpened={state.groupByModal} setmodalIsOpened={() => dispatch({ type: 'GROUP_BY_MODAL', payload: false })}>
      <div className="groupby-modal">
        <div className="groupby-modal-header">
          <GroupByIcon />
          <span>Group By</span>
        </div>
        <div className="select-wrapper">
          <div className="groupby-modal-select">
            <label htmlFor="columns">Group By:</label>
            <select id="columns" onChange={(event) => setValues(event.target.value)}>
              <option value=''>Columns</option>
              {state.columnDefs.map(({ field, headerName }, idx) =>
                <option key={field + idx} value={field}>{headerName}</option>
              )}
            </select>
          </div>
          <TrashIcon className='groupby-modal-trashicon' onClick={() => onDeleteByheaderName(values)} />
        </div>
        <button type='button'
          className="groupby-modal-apply"
          onClick={() => {
            onGroupByheaderName(values)
          }}>Apply</button>
      </div>
    </Modal>
  )
}

export default GroupByModal
