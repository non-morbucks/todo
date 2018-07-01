import React, { Component } from "react";
import HeaderC from './Components/HeaderC';
import List from './Components/List';
import FormSubmit from './Components/FormSubmit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
        todos:[
            {id:1, name:"goshopping",complete:false},
            {id:2, name:"rov",complete:false}
            

        
        ],
        message: ""
      };
      ///โครตงง
      this.onChangeMessage = this.onChangeMessage.bind(this);
      this.onSubmitMessage = this.onSubmitMessage.bind(this);
}


onChangeMessage(e){
this.setState({message: e.target.value});
}

onSubmitMessage(e){
  e.preventDefault();
  //ป้องกันเปลี่ยนหน้า
  let oldTodos = this.state.todos;
  let todoLength = this.state.todos.length;
  let lastId = this.state.todos[todoLength-1].id;
  let newMassage =  {
    id: lastId + 1,
    name: this.state.message,
    complete: false
};
  oldTodos.push(newMassage);
  this.setState({todos: oldTodos});
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
      ><HeaderC />
      <List todos={this.state.todos}/>
  
        
      
      <FormSubmit onChangeMessage={this.onChangeMessage}
      onSubmitMessage={this.onSubmitMessage}
      />
      </div>
        
      
    );
  }
}

export default App;