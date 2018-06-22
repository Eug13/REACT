import React from 'react'
import Header from './Header'
import Catalog from './Catalog'
import {ThemeContext,themes} from './theme-context'



class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onClicked = this.onClicked.bind(this);
        this.state = {
            search: '',
            theme:themes.light,
        };
    

    }

    onClicked(){
        this.setState(state=>({
            theme:
            state.theme === themes.dark
            ?themes.light:themes.dark,
        }));
    }

    handleChange(e) {
        this.setState({ search: e.target.value })
    }


    render() {
        return (
            <div>
                <div>
                    <Header
                        placeholder='Search...'
                        search={this.state.search}
                        onChange={this.handleChange} />
                </div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Catalog search={this.state.search} />
                    {/* <Toolbar changeTheme={this.toggleTheme}/> */}
                </ThemeContext.Provider>
               {/* <section>
                  <ThemedButton click={this.onClicked}/>
                </section>     */}
              <button onClick={this.onClicked}>
                Change theme
              </button>
            
            </div>
        );
    }
}

// function ThemedButton(props) {
//     return (
//         <div>
//             <button onClick={this.props.click}>
//                Change theme
//             </button>
//         </div>
//     );
// }



// function ThemedButton(props) {
//     return (
//         <ThemeContext.Consumer>
//             {theme => <Button {...props} theme={theme} />}
//         </ThemeContext.Consumer>
//     )
// }

// function Button(props) {
//     return (
//         <div>
//             <button style={{ backgroundColor: props.theme }}>hello</button>
//         </div>
//     )
// }

export default Movies