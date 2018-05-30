import React, { Component ,PureComponent} from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends PureComponent {
    state = {
        reverted: false
    }

    render() {
        console.log('render', 2, this.state, articles.map(article => article.id))
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        App Name
                    <button className="btn btn-primary btn-lg" onClick={this.revert}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles} />
            </div>
        )
    }

    revert = () => {
        console.log('set state', 1)
        this.setState({
            reverted: !this.state.reverted
        })
    }
}

export default App