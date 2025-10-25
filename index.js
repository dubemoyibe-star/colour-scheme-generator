document.getElementById("get-btn").addEventListener("click", function(){

  const colorPickerEl = document.getElementById("color-picker").value.substring(1)
  const modePickerEl = document.getElementById("mode-picker").value

  fetch(`https://www.thecolorapi.com/scheme?hex=${colorPickerEl}&mode=${modePickerEl}&count=5`)
    .then(res => res.json())
    .then(data => console.log(data))
})