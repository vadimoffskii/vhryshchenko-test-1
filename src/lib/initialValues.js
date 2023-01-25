/* eslint-disable import/no-anonymous-default-export */


const x = [
  {
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "latitude": "-37.3159",
    "longtitude": "81.1496",
    "street": "Kulas Light",
    "city": "Kulas Light",
    "company_name": "Romaguera-Crona"
  },
  {
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "latitude": "-43.9509",
    "longtitude": "-34.4618",
    "street": "Victor Plains",
    "city": "Victor Plains",
    "company_name": "Deckow-Crist"
  },
  {
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "latitude": "-68.6102",
    "longtitude": "-47.0653",
    "street": "Douglas Extension",
    "city": "Douglas Extension",
    "company_name": "Romaguera-Jacobson"
  },
  {
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "latitude": "29.4572",
    "longtitude": "-164.2990",
    "street": "Hoeger Mall",
    "city": "Hoeger Mall",
    "company_name": "Robel-Corkery"
  },
  {
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "latitude": "-31.8129",
    "longtitude": "62.5342",
    "street": "Skiles Walks",
    "city": "Skiles Walks",
    "company_name": "Keebler LLC"
  },
  {
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "latitude": "-71.4197",
    "longtitude": "71.7478",
    "street": "Norberto Crossing",
    "city": "Norberto Crossing",
    "company_name": "Considine-Lockman"
  },
  {
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "latitude": "24.8918",
    "longtitude": "21.8984",
    "street": "Rex Trail",
    "city": "Rex Trail",
    "company_name": "Johns Group"
  },
  {
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "latitude": "-14.3990",
    "longtitude": "-120.7677",
    "street": "Ellsworth Summit",
    "city": "Ellsworth Summit",
    "company_name": "Abernathy Group"
  },
  {
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "latitude": "24.6463",
    "longtitude": "-168.8889",
    "street": "Dayna Park",
    "city": "Dayna Park",
    "company_name": "Yost and Sons"
  },
  {
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "latitude": "-38.2386",
    "longtitude": "57.2232",
    "street": "Kattie Turnpike",
    "city": "Kattie Turnpike",
    "company_name": "Hoeger LLC"
  }
]
export default {
  rowData: [],
  currentRow: {},
  defaultColDef: {
    sortable: true,
    flex: 1,
    minWidth: 200,
    suppressMenu: true,
    enableRowGroup: true
  },
  columnDefs: [
    { field: 'name', headerName: 'Name' },
    { field: 'username', headerName: 'User Name' },
    { field: 'email', headerName: 'Email' },
    { field: 'latitude', headerName: 'Latitude' },
    { field: 'longtitude', headerName: 'Longtitude' },
    { field: 'street', headerName: 'Street' },
    { field: 'city', headerName: 'City' },
    { field: 'company_name', headerName: 'Company Name' },
  ],
  groupByModal: false,
  usersListModal: false,
  usersName: [],
}



