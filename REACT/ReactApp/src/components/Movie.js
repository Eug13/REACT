import React from 'react'
import { ThemeContext } from './theme-context'

class Movie extends React.Component {
    render() {
        const  comments  = this.props.comments;
        return (
            <div className='box'>
                <h4>{this.props.title}</h4>
                <p>{this.props.year}</p>
                <img className='pic' src={this.props.poster} alt={this.props.title} />
                {/* <ThemeContext.Consumer>
                    {theme => <MovieButton {...this.props} theme={theme} />}
                </ThemeContext.Consumer> */}
                <MovieButton />
                <div>
                    {comments.map(comment => <Comment key={comment.id}  name={comment.name} email={comment.email} body={comment.body} />)}
                </div>
            </div>

        );
    }
}

function Comment(props) {
    return (
        <div>
            <h4>{props.name}</h4>
            <div>{props.email}</div>
            <p>{props.body}</p>
        </div>
    )
}


function MovieButton(props) {
    return (
        <div>
            {/* <button style={{ backgroundColor:theme.background }}>hello</button> */}
            <ThemeContext.Consumer>
                {theme => (<button {...props} style={{ backgroundColor: theme.background }}>hello</button>)}
            </ThemeContext.Consumer>
        </div>
    )
}

export default Movie