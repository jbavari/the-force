// force.js
// inspired by Joshua Kehn
// http://www.joshuakehn.com/2015/10/22/using-new-force-touch-apis-in-javascript.html

var FORCE_BEGIN = 'webkitmouseforcewillbegin';
var FORCE_DOWN = 'webkitmouseforcedown';
var FORCE_UP = 'webkitmouseforceup';
var FORCE_CHANGE = 'webkitmouseforcechanged';

export class TheForce {

  constructor(element) {
    if (typeof element === 'string') {
      element = document.getElementById(element);
    }
    this.element = element;
    this.forceDown = false;
    this.forceColor = 'yellow';

    window.addEventListener('scroll', () => this.watch());
    this.element.addEventListener('mousedown', (e) => this.handleMouseDown(e));
    this.element.addEventListener('mouseup', (e) => this.handleMouseUp(e));
    this.element.addEventListener(FORCE_BEGIN, (e) => this.handleForceBegin(e));
    this.element.addEventListener(FORCE_DOWN, (e) => this.handleForceDown(e));
    this.element.addEventListener(FORCE_UP, (e) => this.handleForceUp(e));
    this.element.addEventListener(FORCE_CHANGE, (e) =>this.handleForceChange(e));
  }

  beWith(element) {
    this.element = element;
  }

  handleMouseDown(e) {
    e.preventDefault();
  }

  handleMouseUp() {

  }

  handleForceDown() {
    console.log('Caught force down');
    // e.stopPropagation();
  }

  handleForceUp() {
    console.log('Caught force up');
    // obj.removeAttr('force-down')
  }

  handleForceChange(e) {
    // var force = e.originalEvent['webkitForce']
    setTimeout(() => { 
      this.updateForce(e.webkitForce); 
    }, 10);
  }

  updateForce(force) {
    let padding = Math.max(10, 15 * force) | 0;
    let boxShadow = [this.forceColor, ' 0px 0px ', padding, 'px'].join('');
    console.log('update force');
    this.element.style.background = 'blue';

    // var force = this;
    // var is_force = !!obj.attr('force-down')
    this.element.style.padding = padding + 'px';
    this.element.style.boxShadow = boxShadow;
  }

  handleForceBegin() {
    console.log('Starting force');
  }
}
