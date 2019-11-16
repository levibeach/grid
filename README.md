```
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░▓▓▓▓▓▓░░░▓▓▓▓▓▓░░░▓▓▓▓▓▓░░▓▓▓▓▓▓░░░░░░░░░░░░░░░░
░░░░░░░░░░░░▓▓░░░░░░░░▓▓░░░░▓▓░░░░▓▓░░░░▓▓░░░░▓▓░░░░░░░░░░░░░░
░░░░░░░░░░░░▓▓░░▓▓▓▓░░▓▓▓▓▓▓░░░░░░▓▓░░░░▓▓░░░░▓▓░░░░░░░░░░░░░░
░░░░░░░░░░░░▓▓░░░░▓▓░░▓▓░░░░▓▓░░░░▓▓░░░░▓▓░░░░▓▓░░░░░░░░░░░░░░
░░░░░░░░░░░░░░▓▓▓▓▓▓░░▓▓░░░░▓▓░░▓▓▓▓▓▓░░▓▓▓▓▓▓░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```

Grid is a collection of mixins and variables to create your own css layout framework quickly. It relies on [`calc()`](http://caniuse.com/#search=calc) and [advanced CSS selectors](http://caniuse.com/#feat=css-sel3).

---

## Setup
1. Clone the repo or `npm install @levibeach/grid`
2. Include the `_grid.scss` file in your Sass

## Usage

```
.grid-container-element {
  $grid-children: '.grid-column-element' !global;
  @include grid-container();
  @include grid(1, 2, 4, 5);
}
.grid-column-element {
  ...
}
```

The above styles will result in a `.grid-container-element` which has 4 columns and the layout will be something like this:
```
| 1 |  2  |    4    |     5     |
```

Or you can also just do one-off columns like this:
```
.grid-column-element {
  @include grid-col(6);
}
```
## Variables

###### $grid-gutters `10px`
Sets the width of the gutters between the columns.

###### $grid-columns `12`
Sets the number of columns to run the column/gutter calculations against.

###### $grid-children `div`
Sets the element that will be used when running the `grid()` mixin.

## Demo
You can see it in action [here](https://levibeach.github.io/grid).
