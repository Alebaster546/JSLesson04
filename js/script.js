const mas1Btn = document.getElementById("mas1");
const mas2Btn = document.getElementById("mas2");
const mas3Btn = document.getElementById("mas3");
const a = 1;
const b = 5;
const c = 9;
const arr1 = [
  a,
  12,
  "10",
  { name: "JavaScript" },
  true,
  function () {
    alert("привет");
  },
];
const arr2 = [b, "10", "12", "отлично"];
const arr3 = [c, 5, "6"];

function dataout() {
  alert(arr1);
}
function sum() {
  return arr2;
}

mas1Btn.onclick = function () {
  dataout();

  console.log("dataout");
};

mas2Btn.onclick = function () {
  alert(sum());
};
const bu = function () {
  return arr3;
};
mas3Btn.addEventListener("click", function () {
  alert(bu());
});
