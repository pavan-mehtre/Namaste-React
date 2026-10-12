import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement(
    "div", // Props
    { id: "parent" }, // Attributes
    // children
    React.createElement(
        "div",
        { id: 'child' },
        // Children who are siblings
        [
            React.createElement("h1", { key: 'h1' }, "Namaste React..."),
            React.createElement("h2", { key: 'h2' }, "Hello I am H2")
        ]
    )
);

console.log(heading); // object of react element

// React 18 way
const root = createRoot(document.getElementById('root'));

root.render(heading); // converting object into HTML Element

// React 19 way
// ReactDOM.render(heading, document.getElementById('root')); // converting object into HTML Element

