✅ Short & Compact Answer for Interview – this in JavaScript:

In JavaScript, this refers to the object that is executing the current function.
Its value depends on how the function is called, not where it's defined.

🧠 Simple Rules:
In object method: this = that object

In regular function: this = undefined in strict mode or window in non-strict

In arrow function: this is inherited from parent scope (lexical)

In constructor: this = newly created object

In event listener: this = DOM element triggering the event