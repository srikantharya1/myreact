import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("div", { id: "parent" }, 
[React.createElement("div", { id: "child" }, [
React.createElement("h1", { id: "none" }, "Create react Element"),
React.createElement("h2", { id: "none2" }, "Create react Element2")
]),
React.createElement("div", { id: "child2" }, [
React.createElement("h1", { id: "none" }, "Create react Element"),
React.createElement("h2", { id: "none2" }, "Create react Element2")
])
]);

console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);