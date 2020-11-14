window.onload = function () {
  const control = document.getElementById("control");
  const algorithm_container = document.querySelector("algorithm_container");
  const array_size = document.querySelector("array_size");
  const sort_speed = document.querySelector("sort_speed");
  var generate_rand_array_btn = document.getElementById("generate");
  var array_container = document.getElementById("array_container");

  generate_rand_array_btn.addEventListener("click", function (e) {
    generateArray();
  });
  function generateArray() {
    array_container.innerHTML = "";
    for (let i = 0; i < 82; i++) {
      var height = Math.floor(Math.random() * Math.floor(99)) + 1;
      var bar = document.createElement("div");
      bar.style.height = height + "%";
      bar.style.top = 100 - height + "%";
      bar.id = "bar";
      document.getElementById("array_container").appendChild(bar);
    }
  }

};
