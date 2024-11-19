let who = ["Juan", "Mi tito", "Mi amigo", "Pedro"];
let action = ["jugo", "quito", "perdió", "corrió"];
let what = ["mi tarea", "las sillas", "el pendiente"];
let when = ["hoy", "ayer", "el jueves", "hace medio año", "hace dos días"];

function excuseGenerator(who, action, what, when) {
  let whoRandomIndex = Math.floor(Math.random() * who.length);
  let actionRandomIndex = Math.floor(Math.random() * action.length);
  let whatRandomIndex = Math.floor(Math.random() * what.length);
  let whenRandomIndex = Math.floor(Math.random() * when.length);

  return(`${who[whoRandomIndex]} ${action[actionRandomIndex]} ${what[whatRandomIndex]} ${when[whenRandomIndex]}`);
}

function onLoad() {
  let excuse = document.getElementById("excuse");
  excuse.innerHTML = excuseGenerator(who, action, what, when);
}

window.onload = onLoad;