import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";



class About extends Component {
    constructor(props) {
        super(props);

        // console.log(" Parent Constructor");
    }
    componentDidMount() {
        // console.log(" Parent componentDidMount");
    }


    render() {
        // console.log("Parent Render");
        return (
            <div>
                <h1>About Us</h1>
                <p>This is Namaste React Web Series. We are learning React from scratch.</p>
                <UserClass name={"Akshay Saini {classes}"} location={"Delhi Class"}/>
                {/* <UserClass name={"Akshay Saini {classes}"} location={"Delhi Class"}/> */}
            </div>
        );
    };
};

// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <p>This is Namaste React Web Series. We are learning React from scratch.</p>
//             <UserClass name={"Akshay Saini {classes}"} location={"Delhi Class"}    />

//         </div>
//     );
// };

export default About;