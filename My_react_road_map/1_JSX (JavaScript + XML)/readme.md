What is JSX?
✨ JSX stands for:
JavaScript + XML (HTML-like syntax)

It allows you to write HTML inside JavaScript.

✅ JSX is not a string. It's actual code.
✅ Browsers can't read JSX directly — it gets converted to normal JavaScript using tools like Babel.
-------------------------------------------------------------------------------------
🧠 Step 2: Why do we need JSX in React?
In React, we build UI using components, and inside those components, we return JSX to describe what UI should look like.

Instead of doing this 👇:

javascript
document.createElement("h1");


We write this (much easier!) 👇:


<h1>Hello World</h1>
Much cleaner, right?
---------------------------------------------------------------------------------------

🧠 Step 3: Basic JSX Example

const element = <h1>Hello JSX!</h1>;
This creates an element like this:


<h1>Hello JSX!</h1>
But you wrote it inside JavaScript. That's the magic.
---------------------------------------------------------------------------------------
🧠 Step 4: JSX Rules You Must Know
✅ Rule 1: Only One Parent Element
Wrong ❌:


return (
  <h1>Hello</h1>
  <p>World</p>
);
Correct ✅:


return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
You can also use Fragment if you don’t want a <div>:


return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
✅ Rule 2: class becomes className
Because class is a reserved word in JavaScript.

Wrong ❌:


<h1 class="title">Hello</h1>
Correct ✅:


<h1 className="title">Hello</h1>
✅ Rule 3: Use {} to run JavaScript inside JSX

const name = "Abhishek";

return <h1>Hello {name}</h1>;
You can even do math:


return <p>2 + 2 = {2 + 2}</p>;
✅ Rule 4: Self-Closing Tags
Like <img>, <input>, or <br>, you MUST write:


<img src="..." />
<input type="text" />
Don’t forget the / at the end.

🧪 Step 5: Try a JSX Component
Let’s make a simple React component using JSX:


function Welcome() {
  const name = "Abhishek";
  return <h1>Hello, {name}! Welcome to React.</h1>;
}
This is a React function component, and it returns JSX.

🔥 Recap
Concept	JSX Version	Notes
HTML in JS	<h1>Hello</h1>	Easy to write UI
JavaScript inside	{}	Use JS logic inside JSX
class in HTML	className	JSX uses className
Multiple Elements	Wrap in <> </> or <div>	One parent rule
Self-closing Tags	<img />, <input />	Must use /