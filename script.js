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
    elem.style.cssText = `height: ${this.height};
                          width: ${this.width};
                          background: ${this.bg};
                          font-size: ${this.fontSize};`;
    elem.textContent = "Любой текст";
  };
};

let myElement = new DomElement(".testElem","200px","500px","#a5faaa","20pt");
myElement.show();

let myElement2 = new DomElement("#testElem","400px","100px","#ff9999","10pt");
myElement2.show();