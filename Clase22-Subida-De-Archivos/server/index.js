const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const mimetype = file.mimetype;
    const [tipo, extension] = mimetype.split("/"); // ["image", "jpeg"]
    if (tipo !== "image") {
      cb(new Error("No es imagen"));
    } else {
      const nombre = file.originalname + "-" + Date.now() + "." + extension;
      cb(null, nombre);
    }
  },
});

// Upload va a guardar la lógica para la subida de los archivos y me va a permitir instanciar los MW.
const upload = multer({
  dest: "uploads/",
  limits: {
    fileSize: 200000,
  },
  fileFilter: (req, file, callback) => {
    const tiposPermitidos = /jpg|jpeg|png/;
    // file/tipo
    // image/png -> ["image", "png"]

    const tipo = file.mimetype.split("/")[1];

    const esImagen = tiposPermitidos.test(tipo);
    if (esImagen) {
      callback(null, true);
    } else {
      callback(new Error("La imagen no es una imagen permitida"));
    }
  },
  storage: storage,
});

const app = express();

app.use(require("cors")());
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

// con express no hay una forma por defecto de hacer el parseo. :(
app.post("/archivo", upload.single("fotoDePerfil"), (req, res) => {
  console.log(req.file);

  res.send("Carga el archivo");
});

app.listen(3000, () => {
  console.log("Vamos que estamos en noviembre");
});
