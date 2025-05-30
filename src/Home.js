import { useState } from "react";

const Home = () => {
   // let name = 'Victor';

    const [name, setName] = useState('Victor');
    const [age, setAge] = useState(20);


    const handleClick = () => {
            setName("Ushindi")
            setAge(19);
        }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick= {handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;