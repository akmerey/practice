window.onload = function() {
  check = (word) => {
    if (word.length > 8) {
      word.style.color = "yellow";
    }
     else {
      word;
    }
  }

  func = () => {
    var str = document.querySelector("#Second").innerText;
    var newt = str.trim().split(' ').map(check).join(' ');
    document.querySelector("#Second").innerText = newt;

  }

}
