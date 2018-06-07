import React from 'react'
import { render } from 'react-dom'
// import App from './components/App'



// render(<App/>,document.getElementById('root'));


//Example 1  // Hello world


// function formatName (user){
//     return user.firstName + ' ' + user.lastName;
// }

// function getGreeting(user){
//     if(user){
//         return <h1 className='h1'>Hello , {formatName(user)}!</h1>
//     }
//     return <h1>Hello , Stranger !</h1>
// }

// const user = {
//     firstName:'Martin',
//     lastName:'Pankevich'
// }

// const element = (
//      getGreeting(user)

// )

//Example 2 // Introdusing jsx


// const element = React.createElement(
//     'h1',
//     {className:'greeting'},
//     'hello'
// );

// // Note: this structure is simplified
// // const element = {
// //     type: 'h1',
// //     props: {
// //       className: 'greeting',
// //       children: 'Hello, world!'
// //     }
// //   };

// // just render for examples 1,2

// render( 
//    element,
//     document.getElementById('root')
// );



//Example 3 //Rendering elements


// function tick(){

//     const element = (
//        <div>
//            <h1>Hello , world !</h1>
//            <h2>It is {new Date().toLocaleTimeString()}.</h2>
//        </div>    
//     );
//     render( 
//         element,
//          document.getElementById('root')
//      );
// }

// setInterval(tick,1000);


//Example 4 //Components and props

// function Welcome(props){
//     return <h1>Hello , {props.name}</h1>

// } 

//  const element =  <Welcome name='Dany'/>;

// render(
//     element, document.getElementById('root') 
//  );


// example with class

// class Welcome extends React.Component{
//     render(){     
//         return <h1>Hello , {this.props.name} !</h1>;
//     }
// }


//  render(
//     <Welcome name='Dany'/>, document.getElementById('root') 
//  );

// Composing components

// class Welcome extends React.Component{
//     render(){     
//         return <h1>Hello , {this.props.name} !</h1>;
//     }
// }

// function App(){
//     return(
//         <div>
//             <Welcome name='Dany'/>
//             <Welcome name='Nancy'/>
//             <Welcome name='Ben'/>
//         </div>    
//     )
// }


//  render(
//     <App/>, document.getElementById('root') 
//  );


// Exstracting components

// function Comment(props){
//     return(
//         <div className="Comment">
//            <div className="UserInfo">
//                 <img className="Avatar"
//                   src={props.author.avatarUrl}
//                   alt={props.author.name}
//                 />
//                 <div className="UserInfo-name">
//                   {props.author.name}
//                 </div>
//            </div>
//            <div className="Comment-text">
//              {props.text}
//            </div>
//            <div className="Comment-date">
//               {formatDate(props.date)}
//            </div>
//         </div>
//     );
// }

//Extract

// function Avatar(props) {
//     console.log('avatar',props);
//     return (
//         <img className="Avatar"
//             src={props.url}
//             alt={props.user}
//         />
//     );
// }

// function UserInfo(props){
//     console.log('UserInfo',props);
//     return(
//         <div className="UserInfo">
//                <Avatar user={props.user} url={props.url}/>
//                 <div className="UserInfo-name">
//                   {/* {props.author.name} */}
//                 </div>
//            </div>
//     );
// }

// function Comment(props){
//     console.log('Comment',props);
//     return(
//         <div className="Comment">
//            <UserInfo user={props.author} url={props.avatarUrl}/>
//            <div className="Comment-text">
//              {props.text}
//            </div>
//            <div className="Comment-date">
//               {/* {formatDate(props.date)} */}
//            </div>
//         </div>
//     );
// }


// render(
//     <Comment name ='Bob' author='Bob2' text='hello world!' avatarUrl='http://3.bp.blogspot.com/-rp-1JbzrufA/UbRUmbPrO5I/AAAAAAAAAAA/5LhhkUIByf0/s1600/image001.jpg' />,
//     document.getElementById('root')
// )

//Example 4 //state and life cycles

// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
// render(
//       element,
//       document.getElementById('root')
//     );
//   }

//   setInterval(tick, 1000);


//clock

// function Clock(props) {
//     // console.log(props);
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     )
// }

// function tick(){
//     render(
//         <Clock date={new Date()}/>,
//         document.getElementById('root')
//     );
// }

// setInterval(tick,1000);


//clock //converting function to the Class for start using state

class Clock extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            date: new Date()
        };
    }

    //this methods called lifecycle hooks
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // componentWillUpdate(){
    //     console.log('component will Update ==>',new Date());
    // }

    // componentDidUpdate(){
    //     console.log('component Did Update ==>',new Date());
    // }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()+ " " +this.props.name}.</h2>
            </div>
        );
    }
}


function App() {
    return (
        <div>
            <Clock name='Casio' />
            <Clock name='Vostok' />
            <Clock name='Suunto' />
        </div>
    );
}

render(
    <App/>,
    document.getElementById('root')
);