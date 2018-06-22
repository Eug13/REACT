// import React from 'react'


// class Counter extends React.Component{
//     constructor(props){
//         super(props);
//         this.incrementCount = this.incrementCount.bind(this);
//         this.decrementCount = this.decrementCount.bind(this); 

//         this.state = {
//             count:0
//         }
//     }

//     incrementCount(){
//       this.setState({
//         count: this.state.count +1
//       });
//     }
//     decrementCount(){
//       this.setState({
//         count: this.state.count - 1
//       });
//     }

//     render(){
//       return (
//         <div className="counter">
//           <h1>{this.state.count}</h1>
//           <button className="btn" onClick={this.decrementCount}>Prev</button>
//           <button className="btn" onClick={this.incrementCount}>Next</button>
//         </div>
//       );
//     }


  
// }
// //   React.render(
// //   <Counter />,
// //     document.body
// //   );

// export default Counter