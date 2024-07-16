const Excel = require("excel4node");
module.exports = {
  async fileExcel (data, ctx){
    data = data.results.map((item) => {
      const { createdAt, updatedAt, publishedAt, ...rest } = item;
      return rest;
    });
    if (!data || data.length === 0) {
      ctx.throw(400, "No se encontraron datos para exportar");
    }
    const titles = Object.keys(data[0]);
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("Datos");
    const titleStyle = workbook.createStyle({
      font: { bold: true },
      alignment: { horizontal: "center", vertical: "center" },
    });
    titles.forEach((title, index) => {
      worksheet
        .cell(1, index + 1)
        .string(title)
        .style(titleStyle);
    });
    const dataCellStyle = workbook.createStyle({
      alignment: { horizontal: "center", vertical: "center" },
    });
    data.forEach((item, rowIndex) => {
      Object.keys(item).forEach((key, colIndex) => {
        worksheet
          .cell(rowIndex + 2, colIndex + 1)
          .string(item[key] ? item[key].toString() : "")
          .style(dataCellStyle);
      });
    });
    ctx.attachment("reporte.xlsx");
    ctx.set(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    ctx.body = await workbook.writeToBuffer();
  }
};
