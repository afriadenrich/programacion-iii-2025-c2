const express = require("express");
const PDFDocument = require("pdfkit");
const fs = require("fs");

const app = express();

app.get("/pdf", (req, res) => {
  const doc = new PDFDocument();

  //   res.setHeader("Content-Disposition", "attachment; filename=pdf.pdf.pdf.pdf");

  doc.pipe(res);

  doc.font("./archivos/pkmnems.ttf").fontSize(25).text("HOLA MUNDO", 300, 100);

  doc.addPage().fontSize(25).text("Here is some vector graphics...", 100, 100);

  doc.save().moveTo(100, 150).lineTo(100, 250).lineTo(200, 250).fill("#FF3300");

  doc
    .scale(0.6)
    .translate(470, -380)
    .path("M 250,75 L 323,301 131,161 369,161 177,301 z")
    .fill("red", "even-odd")
    .restore();

  doc.end();
});

app.listen(3000);
