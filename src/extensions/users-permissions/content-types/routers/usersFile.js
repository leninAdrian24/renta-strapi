module.exports = {
  routes:[
    {
      method: 'GET',
      path: '/users/excel',
      handler: 'usersFile.excel'
    },
    {
      method: 'GET',
      path: '/users/pdf',
      handler: 'usersFile.pdf'
    },
    {
      method: 'GET',
      path: '/users/csv',
      handler: 'usersFile.csv'
    },
    {
      method: 'GET',
      path: '/users/copy',
      handler: 'usersFile.copy'
    }
  ]
}