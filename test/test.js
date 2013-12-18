
var extensible = require('extensible');
var assert = require('assert');

describe('extensible(fn)', function(){
  it('should add .extend() to its constructor', function(){
    function A(){}
    extensible(A);
    assert(A.extend);
  })
})

describe('A.extend(fn)', function(){
  it('should extend B with its prototype', function(){
    function A(){}
    A.prototype.name = 'a';
    function B(){}
    extensible(A);
    A.extend(B);

    var b = new B;
    assert('a' == b.name);
    assert(b.constructor == B);
  })
})

describe('A.extend(fn, bool)', function(){
  it('should not make `B` extensible', function(){
    var A = extensible(function(){});
    var B = A.extend(function(){}, 'final');
    assert(new B instanceof A);
    assert(B.extend === undefined);
  })
})

describe('A.extend()', function(){
  it('should create a new function', function(){
    var A = extensible(function(){ this.touched = true; });
    var B = A.extend();
    assert(new B() instanceof A);
    assert(new B().touched === true);
  })
})

describe('A.extend(obj)', function(){
  it('should create a new function and merge `obj` onto its prototype', function(){
    var A = extensible(function(){});
    var B = A.extend({merged: true});
    assert(new B().merged === true);
    assert(B.merged === undefined);
    assert(new B() instanceof A);
  })
})
