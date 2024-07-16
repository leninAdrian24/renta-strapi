module.exports = {
  routes:[
    {
      method: 'GET',
      path: '/documents/excel',
      handler: 'api::document.document-files.excel'
    },
    {
      method: 'GET',
      path: '/documents/pdf',
      handler: 'api::document.document-files.pdf'
    },
    {
      method: 'GET',
      path: '/documents/csv',
      handler: 'api::document.document-files.csv'
    },
    {
      method: 'GET',
      path: '/documents/copy',
      handler: 'api::document.document-files.copy'
    }
  ]
}