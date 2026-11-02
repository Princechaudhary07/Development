const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const heading2=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"This is h1"),
            React.createElement("h2",{},"This is h2")]

    )
)
const root2=ReactDOM.createRoot(document.getElementById("root"));
root2.render(heading2);