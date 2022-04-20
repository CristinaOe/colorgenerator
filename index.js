const colorPicker = document.getElementById("color-picker");
//console.log(colorPicker)
const colorMode = document.getElementById("color-mode");
const schemeBtn = document.getElementById("scheme-btn");

const schemeColor = document.getElementById("scheme-color");
const hexTextColor = document.getElementById("hex-text-color");

let selectColor = colorPicker.value.slice(1);
let selectMode = colorMode.value;

//console.log(selectMode)

colorPicker.addEventListener("change", function () {
  selectColor = colorPicker.value.slice(1);
});

colorMode.addEventListener("change", function () {
  selectColor = colorMode.value;
});
console.log(selectColor);

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
            <div id="color-output" style="background-color: ${color.hex.value}"></div>`;
        colorHex += `<p>${color.hex.value}</p>`;
      }
      schemeColor.innerHTML = colorOutput;
      hexTextColor.innerHTML = colorHex;
    });
});
