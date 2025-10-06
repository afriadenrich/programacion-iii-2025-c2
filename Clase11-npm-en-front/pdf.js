const { jsPDF } = jspdf;
const doc = new jsPDF();

doc.text("Hello world!", 10, 10);

// console.log(window.jspdf);

document.getElementById("pdf").onclick = () => {
  doc.save("a4.pdf");
};
