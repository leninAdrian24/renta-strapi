module.exports = {
  routes:[
    {
      method: 'GET',
      path: '/rents/excel',
      handler: 'api::rent.rent-files.excel'
    },
    {
      method: 'GET',
      path: '/rents/pdf',
      handler: 'api::rent.rent-files.pdf'
    },
    {
      method: 'GET',
      path: '/rents/csv',
      handler: 'api::rent.rent-files.csv'
    },
    {
      method: 'GET',
      path: '/rents/copy',
      handler: 'api::rent.rent-files.copy'
    }
  ]
}