import React from 'react'
import Movie from './Movie'

class Catalogi extends React.Component {
    constructor(props) {
        super(props);
        this.getMovies = this.getMovies.bind(this);
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
        this.state = {
            movies: [],
            count: 1,
            movieId:1

        };

    }

    getMovies(data) {
        let search = this.props.search;
        let page = data;
        return fetch(`http://www.omdbapi.com/?s=${search}&page=${page}&apikey=cc7bde1b`)
            .then(res => res.json())
            // .then(res => console.log(res.Search))
            .then(res => res.Search.map((movie) => ({
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster
            })))
            .then(movies => this.setState({
                movies
            }))
            .catch(error => console.error(error))

    }

    componentDidMount() {
        // console.log(this.getMovies())
        // this.getMovies();
    }

    componentDidUpdate(prev) {
        if (prev.search !== this.props.search) {
            this.getMovies()
        }
        if (!prev.count) {
            this.getMovies(this.state.count)
        }
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        });
    }
    decrementCount() {
        if (this.state.count >= 2) {
            this.setState({
                count: this.state.count - 1
            });
        }
    }




    render() {
        const { movies } = this.state;
        const {comments} = this.props;
        return (
            <div>
                <div className="counter">
                    <button className="btn" onClick={this.decrementCount}>Prev</button>
                    <span className='count'>{this.state.count}</span>
                    <button className="btn" onClick={this.incrementCount}>Next</button>
                </div>
                <div className='content'>
                    {movies.map((movie,index) => <Movie key={index} title={movie.title} year={movie.year} poster={movie.poster} comments={comments.filter(coment=> coment.postId == index )}/>)}

                </div>
            </div>
        );
    }
}


// function data(){
//    return <h1>data will be here!</h1>;
// }

const WithComments = (WrapedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            // this.handleChange = this.handleChange.bind(this);
            this.getComments = this.getComments.bind(this);
            this.state = {
                comments: []
            };
        }

        getComments() {
            return fetch(`https://jsonplaceholder.typicode.com/comments`)
                .then(res => res.json())
                // .then(res => console.log(res))
                .then(res => res.map((comment) => ({
                    postId: comment.postId,
                    id: comment.id,
                    name: comment.name,
                    email: comment.email,
                    body: comment.body
                })))
                .then(comments => this.setState({
                    comments
                }))
                .catch(error => console.error(error))
        }

        componentDidMount() {
            // ... that takes care of the subscription...
            this.getComments();
        }

        //   componentWillUnmount() {
        //     DataSource.removeChangeListener(this.handleChange);
        //   }

        //   handleChange() {
        //     this.setState({
        //       data: selectData(DataSource, this.props)
        //     });
        //   }

        render() {
            return (
                <div>
                    <WrapedComponent {...this.props} comments={this.state.comments || []} />
                </div>
            );
        }
    }
}




const Catalog = WithComments(Catalogi);

export default Catalog