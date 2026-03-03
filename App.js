import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span> React Element</span>
//React Element
const Heading = (<h1 className='head'>
    Namaste React (using JSX)
    {elem}  {/* React element inside React element */}
</h1>
);


// React Component
const Title = () => {
    return <h1 className="head" tabIndex="5">
        Namaste React using JSX
    </h1>
};
// Class Based Component - OLD
// Functional Component - NEW


// React Functional Component 

const HeadingComponent = () => (
     <h1 className="heading"> Namaste React Functional Component</h1>
);
// Component Composition
const HeadingComponent2 = () => (
     <div id="container">
        {Title()}   {/* calling function or Functional Component in JSX */}
        {100+200}   {/* Javascript inside JSX (it uses cross side scripting attack hence it is secured)*/}  
        {Heading}   {/* React Element inside JSX */}
        <Title />   {/* FunctionalComponent inside JSX */}
        <h1 className="heading"> Namaste React Functional Component</h1>
    </div>
); 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);