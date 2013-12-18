# extensible

  extensible constructors.

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/extensible

## Example

```js
function View(){}
function FormView(){}
function TabView(){}
function ComplexFormView(){}

// => Make the view extensible

extensible(View);

// => FormView extends View

View.extend(FormView);

// => ComplexFormView extends FormView

FormView.extend(ComplexFormView);
```

It also offers some sugar for creating simple classes. If you don't need a special constructor for your sub-class then you don't need to pass one because the following two statements are equivalent:

```js
var FormView = View.extend()
var FormView = View.extend(function(){ View.apply(this, arguments) })
```

Also you can pass an object if you want to add a few methods to the new sub-class

```js
var FormView = View.extend({
  onClick: function(){ this.submit() },
  submit: function(){}
})
// is equivalent to:
var FormView = View.extend()
FormView.prototype.onClick = function(){ this.submit() }
FormView.prototype.submit = function(){}
```

## API

### extensible(Constructor)

Add recursive `.extend(Other)` method to `Constructor`.

## component/inherit

extensible uses component/inherit to do the inheritance,
but it's different from inherit since it adds `.extend()` static
method to your constructor.

this means you can have a single `extensible(View)` and do `View.extend(OtherView)`
instead of installing `component/inherit` on each view component.

## License

  MIT
