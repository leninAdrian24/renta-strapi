const { FileCsv } = require("../../../extensions/files/csv");
const { fileCopy } = require("../../../extensions/files/copy");
const { fileExcel } = require("../../../extensions/files/excel");
const { filePdf } = require("../../../extensions/files/pdf");
module.exports = {
  /**
   * @param {any} ctx
   */
  async excel(ctx) {
    let data = await strapi.services["api::currency.currency"].find(ctx.query);
    await fileExcel(data,ctx)
  },
  async pdf(ctx) {
    let data = await strapi.services["api::currency.currency"].find(ctx.query);
    await filePdf(data,ctx);
  },
  async csv(ctx) {
    let data = await strapi.services["api::currency.currency"].find(ctx.query);
    FileCsv(data,ctx)
  },
  async copy(ctx){
    let data = await strapi.services["api::currency.currency"].find(ctx.query);
    fileCopy(data,ctx);
  }
};

