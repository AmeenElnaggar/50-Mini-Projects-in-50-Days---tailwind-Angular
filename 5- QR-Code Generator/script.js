const imgBox = document.querySelector(".imgBox");
const qrImage = document.querySelector(".qrImage");
const qrText = document.querySelector(".qrText");
const generateButton = document.querySelector(".generateButton");

console.log(imgBox, qrImage, qrText, generateButton);
const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src = url + qrText.value;
    imgBox.classList.add("showImg");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}

generateButton.addEventListener("click", generateQR);
