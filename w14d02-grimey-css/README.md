# Week 14: Tuesday, June 15
- Padlet: [CSS CYOA](https://padlet.com/acidtone/d83sldzgxekn9o7z)

## Background 
- Video: [Why is CSS So Weird?](https://www.youtube.com/watch?v=aHUtMbJw8iA) by Miriam Suzanne
- [CSS basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics) on MDN
- [common CSS questions](https://developer.mozilla.org/en-US/docs/Learn/CSS/Howto) on MDN

### Pre-requisites
- [Install Firefox Developer](https://www.mozilla.org/en-CA/firefox/developer/)
  - Do yourself a favour and debug your CSS using Firefox. It has better Dev Tools for CSS.

---

## Padlet questions
1. Classes, pseudo classes, pseudo elements, content properties.
    - MDN: [Pseudo-classes and pseudo-elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - CSS Tricks: [Introduction to pseudo-elements](https://css-tricks.com/almanac/selectors/a/after-and-before/)
    - CSS Tricks: [A Whole Bunch of Amazing Stuff Pseudo Elements Can Do](https://css-tricks.com/pseudo-element-roundup/)
    - MDN: [`attr()`](https://developer.mozilla.org/en-US/docs/Web/CSS/attr())
2. CSS flexibility to resize content to window size
3. Top library or framework to streamline your CSS styling management. 
    - 3 general paradigms for CSS libraries
        1. Vanilla CSS: Flexible but often difficult to create and maintain
        2. Frameworks: Easy to get started but the framework (i.e. Bootstrap, Material UI) often locks you in and becomes difficult to override. You will often find yourself "fighting the framework". Every Bootstrap site kinda looks the same.
        3. Utility libraries: A sometimes happy medium, utility libraries (like [Tailwind](https://tailwindcss.com/)) provides utility classes for common patterns but doesn't lock you into a framework.
    - Architectures: For complex sites, you often need to think carefully about naming and organization of your styles. Popular architectures
        - [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
        - [BEM](http://getbem.com/) (Block Element Modifier)
            - See: [How to Organize Your CSS with a Modular Architecture
(OOCSS, BEM, SMACSS)](https://snipcart.com/blog/organize-css-modular-architecture)
        - [Atomic CSS](https://css-tricks.com/lets-define-exactly-atomic-css/)
            - See: [Block-Element-Modifier (BEM) & Atomic CSS](https://www.sitepoint.com/css-architecture-block-element-modifier-bem-atomic-css/)

---

## Agenda
1. Progressive Enhancement
2. Layout patterns with CSS Grid and Flexbox
3. Controlling CSS with Javascript

---

## 1. Progressive Enhancement
### Key Takeaways
1. CSS Error Handling
    - Browsers ignore declarations it doesn't understand.
2. CSS Overrides
    - [Specificity](https://css-tricks.com/specifics-on-css-specificity/): which selectors override other selectors.
        - Specificity, in order of highest to lowest:
            1. `!important`
            2. inline styles
            3. `id` selectors
            4. `class`, pseudo-class, attribute selectors
            4. type selectors (i.e. `div`)
        - When in doubt, use `class` selectors. 
        - Avoid `id` selectors; they are difficult to override.
    - [Precedence](https://css-tricks.com/precedence-css-order-css-matters/): when specificity is identical and two declarations conflict, the last declaration in source order will be used. 
3. Estimating browser support with [Can I Use?](https://caniuse.com/)
4. [Feature Queries](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/)

### Materials
- Video: [Resilient CSS, 7-part Series](https://www.youtube.com/playlist?list=PLbSquHt1VCf1kpv9WRGMCA9_Nn4vCLZ9Y)
- Video: [Inspecting the CSS Cascade using Firefox DevTools](https://youtu.be/Sp9ZfSvpf7A) by Miriam Suzanne
- Codepen: [Example code](https://codepen.io/browsertherapy/pen/wvGbLrW) to play with
- Stack Overflow: [React.js inline style best practices](https://stackoverflow.com/questions/26882177/react-js-inline-style-best-practices)

### Activity: Fluid typography with overrides
- Codepen: [Responsive Text: Max Line Length with Scroll Track](https://codepen.io/browsertherapy/pen/RwaJmbx)
  1. Use [`clamp()`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp()) to increase the root `font-size` on wide screens.
  2. Taking advantage of overrides, set the `font-size` to 20px on devices that don't support `clamp()`.

---

## 2. Layout patterns with CSS Grid and Flexbox
### Terminology
**Flex or Grid Container**
: An element with `display: flex` or `display: grid` which creates a "flex/grid context" for its Items.

**Flex or Grid Item**
: All direct children of the Container. Often selected with a child selector such as `.container > *`.

### Key Takeaways
1. [Flexbox vs CSS Grid](https://youtu.be/hs3piaN4b5I)
    - Flexbox arranges flexbox in one dimension; CSS Grid arranges in two dimensions.
    - Flexbox treats elements like the words in a sentence: when/if they wrap, they do not have to line up with the lines above of below.
    - Grid very strictly lines up elements in rows and columns.
    - Use the `flex` and `grid` inspector in Firefox Dev Tools to visualize and debug your layouts.
2. Default values for the [`flex` property](https://css-tricks.com/almanac/properties/f/flex/)
    - 80% of the time you will either use `flex: 0 auto` (default) or `flex: auto` (if you want elements to stretch)
3. HTML Structure
    - Flexbox and CSS Grid are built to work together. That is why they both follow the same Container/Item pattern.
    - Containers can also be items of another grid/flexbox and vice versa.
4. HTML Images
    - When in doubt, set your images to:
        - `width: 100%` and control the size of its parent element.
        - `display: block`, because the default is `inline` (which is often problematic for layout)

### Materials
1. Reference:
    - [Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
    - [Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
    - [Grid by Example](https://gridbyexample.com/)
        - [Grab and Go Patterns](https://gridbyexample.com/patterns/)
        - [Step-by-step Tutorials](https://gridbyexample.com/video/)
2. Layout tutorials
    - Watch: [Build a Classic Layout FAST in CSS Grid](https://youtu.be/KOvGeFUHAC0) by Miriam Suzanne
    - Watch: [Incredibly Easy Layouts with CSS Grid](https://youtu.be/tFKrK4eAiUQ) by Jenn Simmons
    - Watch: [Using Flexbox + CSS Grid Together: Easy Gallery Layout](https://youtu.be/dQHtT47eH0M) by Jenn Simmons
3. Example Code:
    - Codepen: [Flexbox Navigation Patterns](https://codepen.io/browsertherapy/pen/YzqdGpR)
    - Codepen: [Flexbox Layout Patterns](https://codepen.io/browsertherapy/pen/oNYNXZO)
    - Codepen: [Simple Grid Page Layout](https://codepen.io/acidtone/pen/QejVBW)
    - Codepen: [Form with CSS Grid](https://codepen.io/acidtone/pen/vYBQgJm)
    - Codepen: [Form with minimal CSS](https://codepen.io/acidtone/pen/WNeYRwy)

### Activity: Responsive two-columns
- Codepen: [Responsive Text: Max Line Length with Scroll Track](https://codepen.io/browsertherapy/pen/RwaJmbx)
  - Using [Lorem Picsum](https://picsum.photos/), add an image to the above text box as a sibling element.
  - Using a media query, display the text and image side by side on wide screens, using either Flexbox or Grid.

---

## 3. Controlling CSS with Javascript
### Key Takeaways
1. Build a [CSS toggle with `classList`](http://browsertherapy.com/challenges/css-toggles-with-classlist/)
    - Avoid directly manipulating the `styles` attribute of an element. It violates separation of concerns by storing presentation logic in your Javascript.
    - Instead, use the `classList` API to `add`, `remove`, `replace` or `toggle` element class names.
2. Build a [Colour slider with JS, HSL and CSS Variables](http://browsertherapy.com/challenges/colour-sliders-css-variables/)
    - Instead of changing class names, you can directly manipulate CSS variables, which will then cascade normally.
    - Convention is to declare your variables on the `:root` element but you don't have to.
    - Sass and CSS variables have similar uses but only CSS Variables can interact with the browser dynamically on the frontend.

### Materials
- Reference:
  - MDN: [`Element.classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
  - MDN: [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
  - MDN: [`Window.getComputedStyle()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)
- Examples: CSS-only toggles   
  - Codepen: [CSS-only Animated SVG Hamburger Toggle](https://codepen.io/acidtone/pen/RwpEMxV)
- Examples: `classList` 
  - Codepen: [Simple CSS Toggle](https://codepen.io/browsertherapy/pen/jOWdRze)
  - Codepen: [Simple Hamburger Menu Toggle](https://codepen.io/acidtone/pen/xxqmWXb)
  - Demo: [Contrast illusion with CSS toggles](https://acidtone.github.io/illusions/tissue-contrast/)
- Examples: CSS Variables and `style.setProperty`
  - Codepen: [Simple colour slider](https://codepen.io/browsertherapy/pen/dyMGgaV)
  - Codepen: [Thermometer slider](https://codepen.io/acidtone/pen/YbmvrX)
  - Codepen: [Simple theme slider](https://codepen.io/acidtone/pen/VNNWKp)
  - Demo: [Blend mode viewer using CSS sliders](https://acidtone.github.io/blendr/)