import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1',{id:"heading"},"Namaste React from React!");

/* 
--> Above code will return us a javascript object not an h1 element. 
--> There are three parameters to create an element.
1) name of the tag -- h1, h2, div, etc ....
2) props -- {id:"heading", xyz:"something", class:"head-class", etc ....}
3) children -- "Namste React from React"
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
/* 
Here we are creating a root to start our react App, this will the starting point of the app. Because it is a DOM 
operation we are using ReactDOM here.

Below we are rnedering our heading tag inside the root.
Now that object which was returned in the line 1 will be converted to an h1 element.

If anything is present inside the root it will replace it all and append the elements we are rendering through React render.


 */
root.render(heading);


// Nested Structure in React

/* 
<div id="parent">

    <div id="child">
        <h1>I am h1</h1>
        <h2>I am h2</h2>
    </div>

    <div id = child2>
        <h1>I am h1</h1>
        <h2>I am h2</h2>
    </div>

</div>

const parent = React.createElement("div",{id:"parent"},
[
    React.createElement("div",{id:"child"},
    [
        React.createElement("h1",{},"I am h1"),
        React.createElement("h2",{},"I am h2")
    ]),
    React.createElement("div",{id:"child2"},
    [
        React.createElement("h1",{},"I am h1"),
        React.createElement("h2",{},"I am h2")
    ])
]
);

root.render(parent);

 This nested structure looks ugly and confusing at the same time. So to solve this issue JSX comes into place 



*/

