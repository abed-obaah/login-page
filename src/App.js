// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './Components/Login';




// import Main from './Components/Main/Main';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

// class App extends React.Component{
//   constructor(props){
//     super()
//     this.state = {
//       count: 0,
//       name: 'abed'
//     }
//   }
//   render(){
//     return(
//           <div>
//             <input type='text' value={this.state.name} onChange={e => {
//               this.setState({name: e.target.value},console.log(e.target.value))
//             }}/>
//           </div>
//     )
//   }
// }


function App(){
  return(
     <>
        <div>
            <Login />
        </div>
    </>
  )
}
export default App;
