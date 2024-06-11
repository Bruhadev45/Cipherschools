
import { Component } from "react";
class App extends Component{
  name="Bruhadev"
  render(){
    return(
      <>
      <div>
        <h1>This is {this.name}</h1>
      </div>
      <div>
        <p> This is paragraph my name is {this.name}</p>
      </div>
      </>
    )
  }
}
export default App;