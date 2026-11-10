# CSS Learning Notes

This folder is a set of small HTML and CSS exercises for learning how to select, style, and lay out web content. Most examples are independent; open the HTML page for a topic and inspect its linked or embedded CSS.

## What the Examples Teach

### Selectors and the cascade

Selectors choose which elements a rule affects. The cascade resolves competing rules using origin, importance, specificity, and source order. The examples cover element, class, ID, grouped, pseudo-class, pseudo-element, and relationship (combinator) selectors.

```css
h1 { color: navy; }                 /* element */
.notice { color: darkgreen; }       /* class */
#main-title { font-size: 2rem; }    /* ID */
nav a:hover { text-decoration: underline; }
```

Use classes for reusable styling. A more specific selector generally wins over a less specific one; when specificity is equal, the later rule wins.

### Box model and properties

Every element is laid out as content surrounded by padding, border, and margin. Padding adds space inside the border; margin adds space outside it. With `box-sizing: border-box`, declared width and height include padding and border.

```css
.card {
  box-sizing: border-box;
  width: 18rem;
  padding: 1rem;
  border: 1px solid #888;
  margin: 1rem;
  border-radius: 0.5rem;
}
```

The property exercises also demonstrate color, backgrounds, borders, typography, text alignment, line height, and list styling.

### Values, units, and variables

CSS properties accept different kinds of values: keywords, colors, lengths, percentages, and functions. `px` is fixed in CSS pixels; `rem` is relative to the root font size; `em` is relative to the element's font size; `%` depends on the relevant containing value; and `vw`/`vh` are relative to the viewport.

```css
:root {
  --accent: #653d62;
}

.panel {
  color: var(--accent);
  width: min(90%, 40rem);
  padding: 1rem;
}
```

Custom properties declared on `:root` can be reused throughout the page. Functions such as `min()`, `max()`, and `calc()` can combine values when their units are compatible.

### Flexbox and Grid

Flexbox arranges items along one main axis and is useful for navigation, rows, columns, and alignment. `justify-content` distributes items along the main axis; `align-items` aligns them across the cross axis. Wrapping, gaps, and item ordering are also explored.

```css
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
```

Grid lays items out in rows and columns. Use `grid-template-columns` and `grid-template-rows` to define tracks, and `gap` to space them.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}
```

### Sizing and responsive design

`min-width`/`min-height` set lower bounds, while `max-width`/`max-height` set upper bounds. The `min()`, `max()`, and `clamp()` functions can make sizes adapt within limits. Media queries apply rules only when a condition, such as a viewport width, matches.

```css
.content { width: min(100% - 2rem, 60rem); margin-inline: auto; }

@media (max-width: 500px) {
  h2 { font-size: 1rem; }
}
```

The responsive example uses a small-screen media query; the min/max examples demonstrate size constraints and overflow.

### Transitions and animations

A transition smoothly changes a property when its value changes, often on hover. Keyframe animations describe multiple stages and can repeat independently of user interaction.

```css
.button { transition: background-color 0.3s ease; }
.button:hover { background-color: navy; }

@keyframes pulse {
  50% { transform: scale(1.05); }
}
```

## Exercise Files

- `additional.html` / `additional.css` – extra styling practice
- `animations.html` – keyframes and repeated animation
- `box.html` / `box.css` – borders, spacing, sizing, and the box model
- `flexbox.html` / `flexbox.css` – flex direction, order, and alignment
- `flexwrapandalign.html` – wrapping and alignment of flex lines
- `grid.html` / `grid.css` – grid tracks, gaps, and item alignment
- `min-max.html` / `min-max.css` – minimum and maximum sizing
- `properties.html` / `properties.css` – common text, color, and list properties
- `responsive.html` – a media query for a narrow viewport
- `selectors.html` / `selectors.css` – selector types and cascade practice
- `transition.html` – hover transitions
- `types.html` / `types.css` – CSS value types
- `units.html` / `units.css` – relative and fixed units
- `variables.html` / `variables.css` – CSS custom properties
- `univesal.html` / `universal.css` – universal selector practice (the HTML filename is spelled `univesal.html`)

## How to Use

1. Open the topic's HTML file in a browser.
2. Read the corresponding CSS file or the page's `<style>` block.
3. Change a declaration, save, and refresh the page to observe the result.
4. Open browser developer tools to inspect computed styles and experiment further.

Suggested order: selectors and properties, box model, values and units, variables, Flexbox and Grid, responsive sizing, then transitions and animations. These are learning examples rather than production-ready components.
