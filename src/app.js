let who = ["Juan", "Mi tito", "Mi amigo", "Pedro"];
let action = ["jugo", "quito", "perdió", "corrió"];
let what = ["mi tarea", "las sillas", "el pendiente"];
let when = ["hoy", "ayer", "el jueves", "hace medio año", "hace dos días"];

function excuseGenerator(who, action, what, when) {
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (who[whoIndex] +  " " + action[actionIndex] + " " + what[whatIndex] + " " + when[whenIndex]);
}

function onLoad() {
  let excuse = document.getElementById("excuse");
  excuse.innerHTML = excuseGenerator(who, action, what, when);
}

window.onload = onLoad;