import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo: {
          name: "Dummy",
          location: "Dummy",
        }
    };
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/lovelyANSH2410");
    const json = await data.json();

    this.setState({
      userInfo: json,
    })
    console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    
    return (
      <div className="user-card w-3/12 mx-auto p-4">
        <img className="rounded-full m-4" src={avatar_url}></img>
        <h2 className="text-lg font-semibold">Name: {name}</h2>
        <h3 className="font-semibold">Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
