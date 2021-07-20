# SVG: Three ways to insert an SVG
There are three popular methods of using an SVG in an HTML document. See this [CSS Tricks article](https://css-tricks.com/using-svg/) for more methods.

- See the [CodePen](https://codepen.io/acidtone/pen/PobzLjx).
- Activity: [Practice adding SVGs into a web page](https://gist.github.com/acidtone/008a53588ab361a0ccc2fc89ff2439eb)
---

## 1. HTML element

HTML:
```html
<img src="no-bugs.svg" alt="SVG as img">
```

CSS:
```css
img {
  display: block;
  width: 50vmin;
}
```

### Key Takaways
- *Advantages*:
  - No need to worry about SVG code; the browser will treat it like a raster image.
  - Image will be sharp and unpixelated at any size.
  - Aspect ratio will be preserved if `width` and `height` don't match the SVG (unlike raster images, which will squeeze/stretch).
- *Disadvantages*:
  - Internal SVG elements cannot be styled or animated.

---

## 2. CSS background image

HTML:
```html
<div class="image"></div>
```

CSS:
```css
.image {
  width: 50vmin;
  height: 50vmin;
  background-image: url(no-bugs.svg);
  background-size: cover;
}
```

### Key Takeaways
- Same advantages and disadvantages as Method 1.

---

## 3. Inline SVG

HTML:
```svg
<svg viewBox="0 0 496 496" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M396.33 146.225a14.482 14.482 0 016.991 8.573 14.393 14.393 0 01-1.154 10.981 14.387 14.387 0 01-8.596 6.929l-9.622 2.852a67.544 67.544 0 01-9.5 39.158l7.885 7.111a14.44 14.44 0 014.338 15.812 14.434 14.434 0 01-13.242 9.669 14.445 14.445 0 01-10.523-4.152l-8.123-7.313a67.642 67.642 0 01-27.422 11.298 96.937 96.937 0 00-10.048 2.498l3.266 7.38a14.466 14.466 0 01-.015 11.66L190.14 138.256a14.53 14.53 0 0119.875 3.197l4.875 6.478a233.548 233.548 0 0135.764-19.397l-2.62-7.343a14.47 14.47 0 018.881-18.25 14.468 14.468 0 0118.388 8.592l2.621 7.312a235.696 235.696 0 0127.013-6.343 68.148 68.148 0 0113.608-.896l2.291-8.757a14.476 14.476 0 0126.492-3.716 14.475 14.475 0 011.539 10.974l-2.309 8.817a68.16 68.16 0 0129.554 28.897l9.214-2.73a14.483 14.483 0 0111.004 1.134zm-83.399 6.849c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11zm49 36c0 10.494-8.506 19-19 19-10.493 0-19-8.506-19-19 0-10.493 8.507-19 19-19 10.494 0 19 8.507 19 19z" fill="#000"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M267.478 319.362L137.981 189.865a14.416 14.416 0 00-4.559 13.118 14.43 14.43 0 006.046 9.48l6.758 4.912a233.647 233.647 0 00-18.842 35.801l-7.879-2.7a14.419 14.419 0 00-11.143.508 14.41 14.41 0 001.716 26.725l7.921 2.73a235.392 235.392 0 00-5.667 24.698 68.028 68.028 0 00-.634 15.454l-9.408 2.779a14.403 14.403 0 00-9.69 17.921 14.406 14.406 0 0017.922 9.689l9.141-2.705a67.94 67.94 0 0029.573 28.787l-2.346 8.988a14.418 14.418 0 0010.359 17.568c1.196.302 2.424.455 3.656.457a14.455 14.455 0 0014.016-10.786l2.322-8.915a10.554 10.554 0 01.935.08l.211.025h.002c.459.054.917.108 1.369.108a67.772 67.772 0 0037.092-11.285l6.977 7.154a14.443 14.443 0 0020.768-20.067l-7.428-7.617a67.64 67.64 0 009.817-25.228 96.732 96.732 0 013.144-12.62l7.313 3.437a14.41 14.41 0 0010.035 1.001zm-94.298-7.966a29.248 29.248 0 0036.933-3.638 29.246 29.246 0 003.638-36.933 29.25 29.25 0 10-40.571 40.571z" fill="#000"/>
  <path d="M248 0C111.034 0 0 111.033 0 248c0 136.967 111.034 248 248 248s248-111.034 248-248S384.967 0 248 0zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L142.47 97.216c70.204-49.356 170.226-44.735 235.638 20.676zM117.892 378.108c-65.448-65.448-70-165.481-20.677-235.637L353.53 398.784c-70.203 49.356-170.226 44.736-235.638-20.676z" fill="#000"/>
</svg>
```

CSS:
```css
svg {
  width: 50vmin;
}
path {
  fill: rebeccapurple;
}
```

### Key Takaways
- *Advantages*:
  - Internal SVG elements and attributes can be styled/and animated with CSS.
    - Note: SVGs are defined by a different specification than HTML and CSS. Background colours and borders are controlled with the fill and stroke properties, respectively. See MDN: [Fills and Strokes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes).
  - Internal SVG elements and attributes can be controlled with Javascript using the DOM.
  - The browser doesn't need to make a separate network call to download the SVG since it arrived with the HTML file.
- *Disadvantages*:
  - Large inline SVGs can clutter your HTML. See [this video tutorial](https://youtu.be/kZAZouzlbLo) (with [article](https://webdesign.tutsplus.com/tutorials/how-to-create-responsive-svg-images--cms-32140) and [codepen](https://codepen.io/tutsplus/pen/XybYPd)) to learn how to reuse inline SVGs using the `symbol` and `use` SVG elements.

## Related Gists
- [Openly Licensed Digital Assets](https://gist.github.com/acidtone/1457a7dd95f93d13d6d3effa6cb55aa8)
- [SVG: Getting Started](https://gist.github.com/acidtone/ea248e3207b06cfdf861bdec06816fb9)
- SVG: Three ways to insert an SVG
- [SVG: Clipping problems with viewBox](https://gist.github.com/acidtone/1180c12d207234f9a053eedda981ddf9)
- [Vector Editors: Figma Tool Overview](https://gist.github.com/acidtone/2d23933fcb7b3e051f303020631fbcba)
- [SVG Activity: Add a colour scheme to an inline SVG](https://gist.github.com/acidtone/118f11cd417a7b20fb4f6976f36767a1)