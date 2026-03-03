import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(rendor)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading);


// JSX (transpiled before it reaches Js Engine) - Parcel - Babel

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(rendor)

const jsxHeading = (<h1 className='head'>
    Namaste React using JSX
</h1>)
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);