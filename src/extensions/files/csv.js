const ObjectsToCsv = require('objects-to-csv');
module.exports = {
  async FileCsv(data,ctx){
    data = data.results.map((item) => {
      const { createdAt, updatedAt, publishedAt, ...rest } = item;
      return rest;
    });
    if (!data || data.length === 0) {
      ctx.throw(400, "No se encontraron datos para exportar");
    }
    const csv = new ObjectsToCsv(data);
    const csvString = await csv.toString();
    ctx.set('Content-Disposition', 'attachment; filename="articles.csv"');
    ctx.set('Content-Type', 'text/csv');
    ctx.body = csvString;
  }
}