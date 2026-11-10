# JavaScript Learning Notes

This folder contains independent JavaScript exercises covering language fundamentals, browser APIs, asynchronous code, and common programming patterns. Use the examples to experiment and inspect output in the browser's developer console or, where no browser APIs are needed, in Node.js.

## What the Examples Teach

### Variables, scope, and control flow

`let` and `const` are block-scoped; `const` prevents reassignment of the binding. `var` is function-scoped and is included in some examples to illustrate older JavaScript behavior. Scope determines where a variable can be accessed, and hoisting describes how declarations are handled before code runs. Loops and `switch` provide ways to repeat work and branch on values.

```js
const items = ["book", "pen"];
for (const item of items) {
  console.log(item);
}
```

### Functions, objects, and `this`

Functions package reusable behavior and can be passed as values. Higher-order functions accept or return functions; closures retain access to variables from their outer scope. Currying transforms a function with multiple arguments into a sequence of one-argument functions. Objects group related properties and methods. `this` depends on how a function is called, while `call`, `apply`, and `bind` allow a `this` value to be supplied explicitly. Prototypes provide shared behavior through the prototype chain.

```js
function makeCounter() {
  let count = 0;
  return () => ++count;
}

const nextCount = makeCounter();
console.log(nextCount()); // 1
console.log(nextCount()); // 2
```

### Callbacks, promises, and async/await

A callback is a function passed to another function to run later. Uncontrolled callback dependencies can create deeply nested code (callback hell); inversion of control refers to handing control of a callback to another function. A Promise represents an eventual result: `.then()` handles fulfillment and `.catch()` handles rejection. `async` functions return Promises, and `await` lets code handle a Promise in a sequential style.

```js
async function loadUser(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json();
}

loadUser("https://api.github.com/users/octocat")
  .then(console.log)
  .catch(console.error);
```

The Promise examples also explore chaining, Promise APIs, and error handling. `setTimeout` schedules a callback once; `setInterval` repeats until cleared.

### DOM and events

The Document Object Model (DOM) represents a page as objects JavaScript can query and update. Event listeners respond to browser actions. Events travel through capture and bubble phases; delegation uses a listener on a parent to handle events from matching descendants.

```js
document.querySelector("#list").addEventListener("click", (event) => {
  if (event.target.matches("button.remove")) {
    event.target.closest("li").remove();
  }
});
```

### Debouncing, throttling, and polyfills

Debouncing postpones work until calls have stopped for a chosen interval, which is useful for search input. Throttling limits work to at most once per interval, which can help with frequent events such as resize or scroll. A polyfill supplies a missing API feature in environments that do not support it; check browser support before relying on one.

```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

## Exercise Files

Examples are organized in individual `.js` files by topic:

- **Fundamentals:** `letandconst.js`, `block.js`, `scope.js`, `hoisting.js`, `loops.js`, `switch.js`, `functions.js`, `functiontypes.js`
- **Functions and objects:** `higherOrder.js`, `inbuiltHigherOrder.js`, `closure.js`, `currying.js`, `object.js`, `oops.js`, `this.js`, `Prototype.js`, `callApplyBind.js`
- **Callbacks and async:** `callback.js`, `callbackhell.js`, `inversionOfControl.js`, `promise.js`, `promises.js`, `promiseAPI.js`, `promiseChaining.js`, `asyncAndawait.js`, `fetch.js`, `setTimeOut.js`, `setTimeoutandClosure.js`
- **DOM and events:** `dom.js`, `events.js`, `eventListener.js`, `eventBubblingAndCapturing.js`, `eventDelegation.js`
- **Patterns and utilities:** `polyfill.js`, `debouncing.js`, `throttling.js`, `ratelimiting.js`, `copy.js`, `sum.js`, `shortest.js`, `additional.js`, `trial.js`
- **Modules:** `module1.js` and `module2.js`

Some browser-focused exercises have companion HTML pages:

- `index.html` – a basic page that loads a JavaScript example
- `events.html` – event handling
- `eventDelegation.html` – event delegation
- `debouncing.html` – debouncing
- `throttling.html` – throttling

## How to Use

1. Open a companion HTML file in a browser to run its script.
2. To try a different script, update the page's `<script src="...">` to point to that file.
3. Use the developer console to inspect logged output and errors.
4. Run standalone examples in Node.js when they do not depend on the DOM or browser APIs.

Examples are for learning and may rely on browser APIs, network access, or functions defined elsewhere. Review each file before running it; filenames indicate the topic, but examples may not all be complete applications.
