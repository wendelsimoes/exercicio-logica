// Not using es6 syntax for compatibility issues
btnProcess = document.getElementById("btn_process");
btnProcess.addEventListener("click", function () {
  processDivision(1, 200);
});

function processDivision(min = 1, max = 200) {
  var listData = document.getElementById("list_data");
  // Erase all previous results after new click
  listData.innerHTML = "";

  while (min <= max) {
    var newNode = document.createElement("li");

    switch (true) {
      case min % 3 === 0 && min % 5 === 0:
        newNode.innerText = "Z";
        break;
      case min % 3 === 0:
        newNode.innerText = "X";
        break;
      case min % 5 === 0:
        newNode.innerText = "Y";
        break;
      default:
        newNode.innerText = min;
    }

    listData.appendChild(newNode);
    min++;
  }
}
