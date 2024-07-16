module.exports = {
  routes:[
    {
      method: 'GET',
      path: '/type-cars/excel',
      handler: 'api::type-car.type-car-files.excel'
    },
    {
      method: 'GET',
      path: '/type-cars/pdf',
      handler: 'api::type-car.type-car-files.pdf'
    },
    {
      method: 'GET',
      path: '/type-cars/csv',
      handler: 'api::type-car.type-car-files.csv'
    },
    {
      method: 'GET',
      path: '/type-cars/copy',
      handler: 'api::type-car.type-car-files.copy'
    }
  ]
}