import {useState, useEffect} from "react";
const User = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        
        // API Calls

    }, []);

    return (
        <div className="user-card">
            <h1> Count: {count}</h1>
           
            <h2> Name: {props.name}</h2>
            <h3> location: delhi</h3>
            <h4> Contact: 1234567890</h4>
            <button 
            onClick={() => {
                setCount(1);

            }}
        >
            Count
        </button>
            
        </div>
    );
};
export default User;