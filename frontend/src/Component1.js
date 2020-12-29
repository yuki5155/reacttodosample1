import React, { Component } from 'react';
import axios from 'axios';
//https://www.digitalocean.com/community/tutorials/react-axios-react

class Component1 extends Component {
  

  state = {
    user: '',
    persons: []
  }

  sleep(waitSec, callbackFunc) {
 
    // 経過時間（秒）
    var spanedSec = 0;
 
    // 1秒間隔で無名関数を実行
    var id = setInterval(function () {
 
        spanedSec++;
 
        // 経過時間 >= 待機時間の場合、待機終了。
        if (spanedSec >= waitSec) {
 
            // タイマー停止
            clearInterval(id);
 
            // 完了時、コールバック関数を実行
            if (callbackFunc) callbackFunc();
        }
    }, 1000);
 
}


  componentDidMount() {
    
    axios.get('http://localhost:8000/api/todo/')
      .then(res => {
    
        const persons = res.data;
        this.setState({ persons });
      })
  }

  handleChange = event => {
    //たぶんformのnameから値を代入する？？
    //リアルタイムでformに入っている値
    this.setState({ name: event.target.value });
    
    
  }



  handleSubmit = event => {
    event.preventDefault();
    

    const user = {
      "todo": this.state.name
    };
    

    axios.post('http://localhost:8000/api/todo/', user)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.componentDidMount()
      })


    
  }

  render() {
    return (

      <div>
        <ul>
          { this.state.persons.map(person => <li>{person.todo}</li>)}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }

}

export default Component1