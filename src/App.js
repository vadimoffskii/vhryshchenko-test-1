/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useCallback, useReducer } from 'react';
import './App.scss';
import 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import LoadingOverlayComponent from './components/LoadingOverlayComponent';
import NoRowsOverlayComponent from './components/NoRowsOverlayComponent';
import SideBar from './components/SideBar';
import UsersListModal from './components/UsersListModal';
import GroupByModal from './components/GroupByModal';
import reducer from './lib/reducer';
import AGContext from './lib/context'
import initialValues from './lib/initialValues';
import Header from './components/Header';

const App = () => {
  const gridRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialValues);

  useEffect(async () => {
    gridRef.current.api?.showLoadingOverlay()
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      if (data.length) {
        dispatch({ type: 'GET_ALL_USERS', payload: data })
        gridRef.current.api?.hideOverlay()
      } else {
        gridRef.current.api?.showNoRowsOverlay()
      }
    } catch (e) {
      console.log(e);
      gridRef.current.api?.showNoRowsOverlay();
    }
  }, [])

  const onFirstDataRendered = useCallback(() => {
    gridRef.current.api.forEachNode((node) =>
      node.setSelected(node.firstChild)
    );
  }, []);

  const onSelectionChanged = useCallback((event) => {
    const [selectedNode] = event.api.getSelectedNodes();
    dispatch({ type: 'GET_CURRENT_ROW', payload: selectedNode })
  }, []);

  return (
    <AGContext.Provider value={{ state, dispatch, gridRef }}>
      <Header />
      <div className='grid-wrapper'>
        <div className="ag-theme-custom grid" >
          <AgGridReact
            ref={gridRef}
            rowData={state.rowData}
            rowSelection='single'
            columnDefs={state.columnDefs}
            defaultColDef={state.defaultColDef}
            loadingOverlayComponent={LoadingOverlayComponent}
            noRowsOverlayComponent={NoRowsOverlayComponent}
            onFirstDataRendered={onFirstDataRendered}
            onSelectionChanged={onSelectionChanged}
            enableRangeSelection={true}
            groupDisplayType='singleColumn'
            rowModelType='clientSide'
            rowGroupPanelShow='onlyWhenGrouping'
            animateRows={true}
          />
        </div>
        <SideBar />
      </div>
      <UsersListModal />
      <GroupByModal />
    </AGContext.Provider>
  )
};

export default App;

