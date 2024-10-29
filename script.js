let atk = document.getElementById("atk");
let x = 0;

function swingSword(e) {
  console.log("click");
  let hits = (document.getElementById("hits").innerHTML = `${x++}`);
  let dmg = (document.getElementById("dmg").innerHTML = `${x++}`);
}
