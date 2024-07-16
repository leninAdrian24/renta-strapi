module.exports = {
  routes:[
    {
      method: 'GET',
      path: '/brands/excel',
      handler: 'api::brand.brand-files.excel'
    },
    {
      method: 'GET',
      path: '/brands/pdf',
      handler: 'api::brand.brand-files.pdf'
    },
    {
      method: 'GET',
      path: '/currencies/csv',
      handler: 'api::brand.brand-files.csv'
    },
    {
      method: 'GET',
      path: '/currencies/copy',
      handler: 'api::brand.brand-files.copy'
    }
  ]
}