/* eslint-disable default-case */

const reducer = (state, action) => {
  switch (action.type) {
    case 'GROUP_BY_MODAL': {
      if (!state.columnDefs) return
      return {
        ...state, groupByModal: action.payload
      };
    }
    case 'USER_LIST_MODAL': {
      if (!state.rowData) return
      return {
        ...state, usersListModal: action.payload, usersName: state.rowData.map(({ name }) => name)
      };
    }
    case 'GET_ALL_USERS': {
      return {
        ...state, rowData: action.payload.map(({ name, username, email, address, company }) => (
          {
            name,
            username,
            email,
            latitude: address.geo.lat,
            longtitude: address.geo.lng,
            street: address.street,
            city: address.street,
            company_name: company.name
          }))
      };
    }
    case 'GET_CURRENT_ROW': {
      if (!action.payload) return
      return {
        ...state, currentRow: { id: action.payload.id, data: action.payload.data }
      };
    }

  }
  throw Error('Unknown action: ' + action.type);
}


export default reducer