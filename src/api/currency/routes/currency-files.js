module.exports = {
  routes:[
    {
      method: 'GET',
      path: '/currencies/excel',
      handler: 'api::currency.currency-files.excel'
    },
    {
      method: 'GET',
      path: '/currencies/pdf',
      handler: 'api::currency.currency-files.pdf'
    },
    {
      method: 'GET',
      path: '/currencies/csv',
      handler: 'api::currency.currency-files.csv'
    },
    {
      method: 'GET',
      path: '/currencies/copy',
      handler: 'api::currency.currency-files.copy'
    }
  ]
}