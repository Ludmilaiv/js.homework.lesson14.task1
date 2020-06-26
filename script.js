"use strict"

function DomElement(selector,height,width,bg,fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize
}

DomElement.prototype.show = function() {
  if (".#".indexOf(this.selector[0]) !== -1) {
    let elem;
    if (this.selector[0] === ".") {
      elem = document.createElement("div");
      elem.setAttribute("class",this.selector.slice(1));
    } else if (this.selector[0] ==="#") {
      elem = document.createElement("p");
      elem.setAttribute("id",this.selector.slice(1));
    }
    document.querySelector("body").append(elem);
    elem.style.cssText = `position: absolute;
                          left: 100px; top: 100px;
                          height: ${this.height};
                          width: ${this.width};
                          background: ${this.bg};
                          font-size: ${this.fontSize};
                          `;
    elem.textContent = "Любой текст";
  };
};

let sqer = new DomElement(".testElem","100px","100px","#a5faaa","20pt");

document.addEventListener("DOMContentLoaded", sqer.show.bind(sqer));

document.addEventListener("keydown", function(event) {
  let sqrRender = document.querySelector(sqer.selector);
  let dx = 0, dy = 0;
  let key = event.keyCode;
  switch(key) {
    case 38:
      dy -= 10;
      break;
    case 40:
      dy += 10;
      break;
    case 37:
      dx -= 10;
      break;
    case 39:
      dx += 10;
      break;    
  }
  sqrRender.style.left = parseInt(sqrRender.style.left) + dx + "px";
  sqrRender.style.top = parseInt(sqrRender.style.top) + dy + "px";

})



