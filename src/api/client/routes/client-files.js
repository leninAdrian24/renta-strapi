module.exports = {
  routes:[
    {
      method: 'GET',
      path: '/clients/excel',
      handler: 'api::client.client-files.excel'
    },
    {
      method: 'GET',
      path: '/clients/pdf',
      handler: 'api::client.client-files.pdf'
    },
    {
      method: 'GET',
      path: '/clients/csv',
      handler: 'api::client.client-files.csv'
    },
    {
      method: 'GET',
      path: '/clients/copy',
      handler: 'api::client.client-files.copy'
    }
  ]
}