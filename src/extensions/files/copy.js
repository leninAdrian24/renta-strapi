module.exports = {
  async fileCopy(data,ctx){
    data = data.results.map((item) => {
      const { createdAt, updatedAt, publishedAt, ...rest } = item;
      return rest;
    });
    ctx.send({
      reporte: data
    });
  }
}