module.exports = {
  routes:[
    {
      method: 'GET',
      path: '/cars/excel',
      handler: 'api::car.car-files.excel'
    },
    {
      method: 'GET',
      path: '/currencies/pdf',
      handler: 'api::car.car-files.pdf'
    },
    {
      method: 'GET',
      path: '/currencies/csv',
      handler: 'api::car.car-files.csv'
    },
    {
      method: 'GET',
      path: '/currencies/copy',
      handler: 'api::car.car-files.copy'
    }
  ]
}