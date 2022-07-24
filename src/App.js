import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import Plan from './Plan';
class App extends Component{
  state = {
    items: [],
    text: ""
  }
  handleAdd = (e) => {
      if(this.state.text !== ""){
        const items = [...this.state.items , this.state.text];
        this.setState({items: items , text:""});
      }
  }
  handleDelete = (val) => {
      this.setState({items: this.state.items.filter(
        (e) => {
            return e!==val;
        }
      )})
  }
  render(){
    return(
      <div className='container-fluid my-5'>
        <div className='row'>
          <div className='col-sm-6 mx-auto text-white shadow-lg p-3'>
              <h2 className='text-center'>My today's plan</h2>
              <div className='row'>
                <div className='col-9'>
                  <input type='text' className='form-control ' onChange={(e) => this.setState({text: e.target.value})} placeholder='Write your plan here' value={this.state.text}/>
                </div>
                <div className="col-2">
                  <button className='btn btn-warning px-5 fw-bold' onClick={this.handleAdd}>Add</button>
                </div>
                <div className='container-fluid'>
                    <ul className='list-unstyled row m-5'>
                      {
                        this.state.items.map((value , i) => {
                          return <Plan key={i}  id={i} value={value} handleDelete={this.handleDelete}/>
                        })
                      }
                    </ul>
                </div>
              </div>
            </div> 
        </div>
      </div>
    )
  }
}

export default App;