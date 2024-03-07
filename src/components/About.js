import User from "./User";
import UserClass from "./UserClass";

const About = () => {

    return (
        <div className="about text-center">
            <h1 className="about-item font-bold text-2xl">This is my about page</h1>
            <UserClass className="about-item" name={"Shubham (class)"}/>
        </div>
    )
}

export default About;