
var extend = require('extensible');
var assert = require('assert');

function A(){}
A.extend = extend;
A.prototype.name = 'a';

describe('A.extend(fn)', function(){
  it('should extend B with its prototype', function(){
    function B(){}
    A.extend(B);

    var b = new B;
    assert('a' == b.name);
    assert(b.constructor == B);
  })
})

describe('A.extend(fn, bool)', function(){
  it('should not make `B` extensible', function(){
    var B = A.extend(function(){}, 'final');
    assert(new B instanceof A);
    assert(B.extend === undefined);
  })
})

describe('A.extend()', function(){
  it('should create a new function', function(){
    var A = function(){ this.touched = true; };
    A.extend = extend;
    var B = A.extend();
    assert(new B() instanceof A);
    assert(new B().touched === true);
  })
})

describe('A.extend(obj)', function(){
  it('should create a new function and merge `obj` onto its prototype', function(){
    var B = A.extend({merged: true});
    assert(new B().merged === true);
    assert(B.merged === undefined);
    assert(new B instanceof A);
  })
})
