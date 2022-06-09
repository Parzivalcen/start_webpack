import _ from "lodash";
import printMe from './print.js';
import myName from "./myName.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement('button');
  
  element.innerHTML = _.join(['Hello', 'webpack']," ");

  btn.innerHTML = 'Click to see a cool thing in the console';
  
  btn.onclick = printMe;

  element.appendChild(btn)
  
  // lodash is imported by this script, not in document.
  console.log(_.join(['Hello', 'webpack']," "))

  return element;
}

document.body.appendChild(component());
