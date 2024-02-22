import User from "./User";
import UserClass from "./UserClass";

const About = () => {

    return (
        <div className="about">
            <h1 className="about-item">This is my about page</h1>
            <UserClass className="about-item" name={"Shubham (class)"}/>
        </div>
    )
}

export default About;