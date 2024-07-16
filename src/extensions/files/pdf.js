const PDFDocument = require("pdfkit");
const { PassThrough } = require("stream");


module.exports = {
  async filePdf (data,ctx){
    data = data.results.map((item) => {
      const { createdAt, updatedAt, publishedAt, ...rest } = item;
      return rest;
    });
    if (!data || data.length === 0) {
      ctx.throw(400, "No se encontraron datos para exportar");
    }
    const doc = new PDFDocument();
    const buffers = [];
    const stream = new PassThrough();
    doc.pipe(stream);
    doc
      .font("Helvetica-Bold")
      .fontSize(14)
      .text("Reporte", { align: "center" })
      .moveDown(0.5);
    const tableTop = 100; // Posición inicial de la tabla desde la parte superior de la página
    const tableLeft = 50; // Margen izquierdo de la tabla
    const rowHeight = 30; // Altura de cada fila
    const headers = Object.keys(data[0]);
    const rows = data.map((item) =>
      Object.values(item).map((value) => value.toString())
    );
    const pageHeight =doc.page.height - doc.page.margins.top - doc.page.margins.bottom;
    const totalPages = drawTable(
      doc,
      headers,
      rows,
      tableTop,
      tableLeft,
      rowHeight,
      pageHeight
    );
    doc.end();
    doc.on("data", (chunk) => {
      buffers.push(chunk);
    });
    doc.on("end", () => {
      const pdfData = Buffer.concat(buffers);
      ctx.type = "application/pdf";
      ctx.attachment("datos.pdf");
      ctx.body = pdfData;
    });
  }
}
function drawTable(doc, headers, rows, top, left, rowHeight, pageHeight) {
  let currentY = top;
  let currentPage = 1;
  doc.font("Helvetica-Bold").fontSize(12);
  headers.forEach((header, colIndex) => {
    doc.text(header, left + colIndex * 150, currentY);
  });
  currentY += rowHeight;
  doc.font("Helvetica").fontSize(10);
  rows.forEach((row, rowIndex) => {
    if (currentY + rowHeight > pageHeight) {
      doc.addPage();
      currentPage++;
      currentY = top;
      doc.font("Helvetica-Bold").fontSize(12);
      headers.forEach((header, colIndex) => {
        doc.text(header, left + colIndex * 150, currentY);
      });
      currentY += rowHeight;
      doc.font("Helvetica").fontSize(10);
    }
    row.forEach((cell, colIndex) => {
      doc.text(cell, left + colIndex * 150, currentY);
    });
    currentY += rowHeight;
  });
  return currentPage;
}