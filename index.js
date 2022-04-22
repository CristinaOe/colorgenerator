const colorPicker = document.getElementById("color-picker");
//console.log(colorPicker)
const colorMode = document.getElementById("color-mode");
const schemeBtn = document.getElementById("scheme-btn");

const schemeColor = document.getElementById("scheme-color");
const hexText = document.getElementById("hex-text");

let copiedText = document.getElementsByClassName("copied");

let selectColor = colorPicker.value.slice(1);
let selectMode = colorMode.value;

colorPicker.addEventListener("change", function () {
  selectColor = colorPicker.value.slice(1);
});

colorMode.addEventListener("change", function () {
  selectColor = colorMode.value;
});

function copyToClipboard(copyText) {
  navigator.clipboard.writeText(copyText);
  document.getElementById("copyId").classList.add("active");
  setTimeout(function () {
    document.getElementById("copyId").classList.remove("active");
  }, 1200);
}

schemeBtn.addEventListener("click", function () {
  selectMode;
  selectColor;
  let url = `https://www.thecolorapi.com/scheme?hex=${selectColor}&mode=${selectMode}&count=5`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const colors = data.colors;
      let colorOutput = "";
      let colorHex = "";
      for (let color of colors) {
        colorOutput += `
            <div class="color-output" style="background-color: ${color.hex.value}" onclick="copyToClipboard('${color.hex.value}')"></div>`;
        colorHex += `<p class="hex-text-color">${color.hex.value}</p>`;
      }
      schemeColor.innerHTML = colorOutput;
      hexText.innerHTML = colorHex;
    });
});
