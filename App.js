/**
 * <div id="parent">
 *   <div id="child">
 *     <h1>Hello I am H1</h1>
 *     <h2>Hello I am H2</h2>
 *   </div>
 * </div>
 */

const heading = React.createElement(
    "div", // Props
    { id: "parent" }, // Attributes
    // children
    React.createElement(
        "div",
        { id: 'child' },
        // Children who are siblings
        [
            React.createElement("h1", {}, "Hello I am H1"),
            React.createElement("h2", {}, "Hello I am H2")
        ]
    )
);

console.log(heading); // object of react element

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading); // converting object into HTML Element


