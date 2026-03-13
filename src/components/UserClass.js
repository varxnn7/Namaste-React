import React from "react";

class UserClass extends React.Component {
    // whenever class is created this constructor is called then render is called
    constructor(props) {
        super(props);
        this.state = {
            name: "dummy name",
            location: "dummy location",
           
        };
        console.log("Child Constructor");
    };

    async componentDidMount() {
        console.log("Child componentDidMount");
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState({
            userInfo: json,
        }); 
        console.log(json);

        // API Calls
    }
    componentDidUpdate() {
        console.log("Child componentDidUpdate");
    };
    componentWillUnmount() {
        console.log("Child componentWillUnmount");
    };


    render() {
        const {name , location} = this.state.userInfo;
        
        return (
            <div className="user-card">
                
                <h2> NAMe: {this.state.userInfo?.name}</h2>
                <h3> location: {this.state.userInfo?.location}</h3>
                <h4> Contact: 1234567890</h4>
            </div>
        );
    };
};
export default UserClass;