import React, { Component } from "react";
import HeaderC from "./Components/HeaderC";
import List from "./Components/List";
import FormSubmit from "./Components/FormSubmit";
import Axios from "axios";

const URL ="http://localhost:3001";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[],
      message: ""
    };
    ///โครตงง
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
  }
  componentDidMount = () => {
    Axios.get(URL + "/todos").then(response =>{
    this.setState({todos: response.data });
    });
    
  };
  

  onChangeMessage(e) {
    this.setState({ message: e.target.value });
  }

  onSubmitMessage(e) {
    e.preventDefault();
    //ป้องกันเปลี่ยนหน้า
    Axios.post(URL+  "/todos",{
      name: this.state.message,
      complete: false
    }).then(response =>{
      let oldstate = this.state.todos;
      oldstate.push(response.data);
      this.setState({todos: oldstate})
    });
    }
   

  render() {
    return (
      <div
        style={{
          borderColor: "#e12c6a",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
          width: 1024,
          margin: "auto",
          marginTop: 20
        }}
      >
        <HeaderC />
        <List todos={this.state.todos} />

        <FormSubmit
          onChangeMessage={this.onChangeMessage}
          onSubmitMessage={this.onSubmitMessage}
        />
      </div>
    );
  }
}

export default App;
