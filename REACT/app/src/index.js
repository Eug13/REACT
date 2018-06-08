import React from 'react'
import { render } from 'react-dom'
// import App from './components/App'



// render(<App/>,document.getElementById('root'));


//Example 1  // Hello world
//==========================================================================>

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
//==========================================================================>

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
//==========================================================================>


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
//==========================================================================>


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

// class Clock extends React.Component {
//     constructor(props) {
//         console.log(props);
//         super(props);
//         this.state = {
//             date: new Date()
//         };
//     }

//     //this methods called lifecycle hooks
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }

//     // componentWillUpdate(){
//     //     console.log('component will Update ==>',new Date());
//     // }

//     // componentDidUpdate(){
//     //     console.log('component Did Update ==>',new Date());
//     // }

//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()+ " " +this.props.name}.</h2>
//             </div>
//         );
//     }
// }


// class Clockmini extends Clock {
//     constructor(props) {
//         console.log(props);
//         super(props);

//         }

//         componentDidMount() {
//             this.timerID = setInterval(
//                 () => this.tick(),
//                 10000
//             );
//         }

//         componentWillUnmount() {
//             clearInterval(this.timerID);
//         }

//         tick() {
//             this.setState({
//                 date: new Date()
//             });
//     }
// }


// function App() {
//     return (
//         <div>
//             <Clock name='Casio' />
//             <Clock name='Vostok' />
//             <Clock name='Suunto' />
//             <Clockmini name='mini' />
//         </div>
//     );
// }

// render(
//     <App/>,
//     document.getElementById('root')
// );

//Example 5  //handling events
//==========================================================================>


// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { isToggleOn: true };

//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//         this.showInfo();
//     }

//     showInfo() {
//         if (this.state.isToggleOn === true) {
//             console.log('hello world!')
//         } else {
//             console.log('nope!')
//         }
//     }

//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON ' : 'OFF'}
//             </button>

//         );
//     }

// }


// render(
//     <Toggle />,
//     document.getElementById('root')
// );


// diferent example with es6
// class LoggingButton extends React.Component {
//     // This syntax ensures `this` is bound within handleClick.
//     // Warning: this is *experimental* syntax.
//     handleClick = () => {
//       console.log('this is:', this);
//     }

//     render() {
//       return (
//         <button onClick={this.handleClick}>
//           Click me
//         </button>
//       );
//     }
//   }

//   or but the best practise firct variant

//   class LoggingButton extends React.Component {
//     handleClick() {
//       console.log('this is:', this);
//     }

//     render() {
//       // This syntax ensures `this` is bound within handleClick
//       return (
//         <button onClick={(e) => this.handleClick(e)}>
//           Click me
//         </button>
//       );
//     }
//   }


//Passing arguments to event handlers
// {/* <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */}

//   render(
//     <LoggingButton/>,
//     document.getElementById('root')
// );


//EXAMPLE 6 // Conditional Rendering  //fun example
//==========================================================================>

// function UserGreeting(props) {
//     return (
//         <div>
//            <h1>Welcome back!</h1>
//            <p>Lorem ipsum for all!</p>
//            <img src={'http://3.bp.blogspot.com/-rp-1JbzrufA/UbRUmbPrO5I/AAAAAAAAAAA/5LhhkUIByf0/s1600/image001.jpg'} alt='img'/>
//         </div>
//     );
// }

// function GuestGreeting(props) {
//     return <h1>Please sign up!</h1>
// }

// function Greeting(props) {
//     console.log('Greeting ==>', props);
//     const isLoggedIn = props.isLoggedIn;

//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }

// // render(
// //     <Greeting isLoggedIn ={false}/>,
// //     document.getElementById('root')
// // );

// //element variables

// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>Login</button>
//     );
// }


// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>Logout</button>
//     );
// }


// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = { isLoggedIn: false };
//     }

//     handleLoginClick() {
//         this.setState({ isLoggedIn: true });
//         console.log(this.state.isLoggedIn);
//     }

//     handleLogoutClick() {
//         this.setState({ isLoggedIn: false });
//         console.log(this.state.isLoggedIn);
//     }

//here is example inline if else with conditional operator
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         const button = isLoggedIn ? (
//             <LogoutButton onClick={this.handleLogoutClick} />
//         ) : (
//                 <LoginButton onClick={this.handleLoginClick} />
//             );

//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>
//         );
//     }

// }


// render(
//     <LoginControl />,
//     document.getElementById('root')
// );



// Inline If with Logical && Operator


// function MailBox(props){
//     console.log(props);
//     const unreadMessages = props.unreadMessages;
//     return(
//         <div>
//             <h1>Hello</h1>
//             {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>}
//         </div>
//     );
// }

// const messages = ['React','Re:React','RRR:React','one more'];

// render(
//   <MailBox unreadMessages={messages}/>,
//   document.getElementById('root')
// );


//Preventing Component from Rendering

//CONDITIONAL RENDERING

// function WarnningBanner(props) {
//     if (!props.warn) {
//         return null;
//     }
//     return (
//         <div className='warning'>
//             Warning!
//         </div>
//     );
// }

// class Page extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { showWarning: true };
//         this.handleToggleClick = this.handleToggleClick.bind(this);
//     }

//     handleToggleClick(){
//         this.setState(prevState =>({
//             showWarning:!prevState.showWarning
//         }));
//     }

//     render(){
//         return(
//           <div>
//               <WarnningBanner warn={this.state.showWarning}/>
//               <button onClick={this.handleToggleClick}>
//               {this.state.showWarning ? 'Hide' : 'Show'}
//               </button>
//           </div>
//         );
//     }
// }

// render(
//     <Page/>,
//     document.getElementById('root')
// );



//Example 7   //Lists and KEYS
//==========================================================================>

// const numbers = [1, 2, 3, 4, 5,6,7,8,9];
// const listItems = numbers.map((item) =>
//   <li>{item}</li>
// );

// render(
//     <ul>{listItems}</ul>,
//     document.getElementById('root')
//   );



// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         <li key={number.toString()}>
//             {number}
//         </li>
//     );

//     return (
//         <ul>{listItems}</ul>
//     );
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// )


// function ListItem(props) {
//     // Correct! There is no need to specify the key here:
//     return <li>{props.value}</li>;
// }

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         // Correct! Key should be specified inside the array.
//         <ListItem key={number.toString()}
//             value={number} />

//     );
//     return (
//         <ul>
//             {listItems}
//         </ul>
//     );
// }

// const numbers = [1, 2, 3, 4, 5];
// render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// );

// function Blog(props) {
//     const sidebar = (
//         <ul>
//             {props.posts.map((post) =>
//                 <li key={post.id}>
//                     {post.title}
//                 </li>
//             )}
//         </ul>
//     );
//     const content = props.posts.map((post) =>
//         <div key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//         </div>
//     );
//     return (
//         <div>
//             {sidebar}
//             <hr />
//             {content}
//         </div>
//     );
// }

// const posts = [
//     { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
//     { id: 2, title: 'Installation', content: 'You can install React from npm.' }
// ];
// render(
//     <Blog posts={posts} />,
//     document.getElementById('root')
// );


//Example 8   //Forms !!!!!
//==========================================================================>

// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             valueName: '',
//             vSurName: '',
//             Desc: '',
//             Fruit:'Apple'

//         };

//         this.handleChangeName = this.handleChangeName.bind(this);
//         this.handleChangeSurName = this.handleChangeSurName.bind(this);
//         this.handleTextChange = this.handleTextChange.bind(this);
//         this.handleChangeFruit = this.handleChangeFruit.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChangeName(event) {
//         this.setState({ valueName: event.target.value });
//     }

//     handleChangeSurName(event) {
//         this.setState({ vSurName: event.target.value });
//     }

//     handleTextChange(event) {
//         this.setState({ Desc: event.target.value });
//     }

    
//     handleChangeFruit(event) {
//         this.setState({ Fruit: event.target.value });
//     }

//     handleSubmit(event) {
//         alert('A Client was submited : ' + this.state.valueName + ' ' + this.state.vSurName + ' ' + this.state.Desc + ' ' + this.state.Fruit);
//         event.preventDefault();
//     }

//     render() {
//         return (

//             <form onSubmit={this.handleSubmit} >
//                 <label>
//                     Name:
//               <input type="text" value={this.state.value} onChange={this.handleChangeName} />
//                 </label>
//                 <br />
//                 <label>
//                     SurName:
//               <input type="text" value={this.state.value} onChange={this.handleChangeSurName} />
//                 </label>
//                 <br />
//                 <label>
//                     Discription:
//                 	<textarea type="text" value={this.state.value} onChange={this.handleTextChange} />
//                 </label>
//                 <br />
//                 <label>
//                     Pick your favorite Fruit:
//                      <select value={this.state.value} onChange={this.handleChangeFruit}>
//                         <option value="grapefruit">Grapefruit</option>
//                         <option value="lime">Lime</option>
//                         <option value="coconut">Coconut</option>
//                         <option value="mango">Mango</option>
//                     </select>
//                 </label>
//                 <br />
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }

// }

// render(
//     <NameForm />,
//     document.getElementById('root')
// );



// MULTIPLE INPUTS

class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: false,
        numberOfGuests: 0
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }

  render(
      <Reservation/>,
      document.getElementById('root')
  )