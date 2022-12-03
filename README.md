# SVGNode helper class
## What's the benefit?
This class helps with working with SVG elements. It provides some basic functions:
- getters and setters for `x`, `y`, `width`, `height`
- attribute operators: `get(attr)` and `set(attr)`
- collision detection with other SVGNodes

To create an instance of this class, you pass an object with either a DOM element selector:
```js
// construct with selector
const svgBall = new SVGNode({ selector: "#ball" });

// construct with already selected node
// useful for use within looping over selected elements
const blocks = document.querySelectorAll(".block");
blocks.forEach((block) => {
    const svgBlock = new SVGNode({ domNode: block });
});
```

## Getters and setters
Currently these attributes have getters and setters: `x`, `y`, `width`, `height`.
```
const block = new SVGNode({ selector: ".block" });

console.log(ball.x, ball.y);

ball.x = 30;
```

## Attribute operators
Any other attribute can be read or changed with `get()` and `set()` methods.
```js
const block = new SVGNode({ selector: ".block" });

console.log(ball.get("x"), ball.getStringAttr("fill"));
ball.set("fill", "red");
```

> By default, `get()` tries to conver attribute to Number. To get string attribute (like `fill`) use `getStringAttr()`.






## Collision detection
In order to detect collisions between two SVG elements, you must create new SVGNode instances. Then use collidesWith, which returns `true` if they do:
```js
const ball = new SVGNode({ selector: "#block" });
const block = new SVGNode({ selector: ".block" });

console.log(ball.collidesWith(block));
```
