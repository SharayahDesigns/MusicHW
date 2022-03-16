import React from "react";
import List from "./List";
class MuiscForm extends React.Component{
  render() {
    return (

      <div className="box" >
        <form>
          <h1>Music Form</h1>
          <h3>Artist:</h3>
          <input />
          <h3>Song:</h3>
          <input/>
          <h3>price:</h3>
          <input />
          <br />
          <br/>
          <button  ><span>add</span><div className="liquid"></div> </button>
        </form>
       </div>
)
  }

}
export default MuiscForm
