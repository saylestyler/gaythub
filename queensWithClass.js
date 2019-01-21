/*
 * Q: what's all this class stuff and what's it look like when it's compiled to es5
 * A: a quicker way that compiling with grunt/gulp or some other build tool is to just use babel's repl
 * https://babeljs.io/en/repl
 */

class DragQueen {
  constructor (name, wig, designer) {
    this.name = name
    this.wig = wig
    this.designer = designer
  }

  announceMe () {
    return `ladies and gentlemen please welcome to the stage
            ${this.name} wearing a ${this.wig} in ${this.designer}`
  }
}

var queen = new DragQueen('brenda with bangs', 'layered bob', 'Marquès Almeida')

alert(queen.announceMe())


/*
 * from babel repl 
 */

'use strict'

var _createClass = (function () {
  function defineProperties (target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true

      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  } return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps); 
    if (staticProps) defineProperties(Constructor, staticProps)
    
    return Constructor
  };
}())

function _classCallCheck (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

// the actually interesting part :~) wig 
var DragQueen = (function () {
  function DragQueen (name, wig, designer) {
    _classCallCheck(this, DragQueen)

    this.name = name
    this.wig = wig
    this.designer = designer
  }

  _createClass(DragQueen, [{
    key: 'announceMe',
    value: function announceMe () {
      return 'ladies and gentle please welcome to the stage ' + this.name + ' wearing a ' + this.wig + ' in ' + this.designer
    }
  }])

  return DragQueen
}())

var queen = new DragQueen('brenda with bangs', 'layered bob', 'Marquès Almeida')

alert(queen.announceMe())
