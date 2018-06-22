import React from 'react'


class Header extends React.Component {

    render() {

        return (
            <div>
                <form>
                    <input
                        id='search'
                        type='text'
                        placeholder={this.props.placeholder}
                        value={this.props.search}
                        onChange={this.props.onChange}
                    />
                </form>
            </div>
        );
    }
}

export default Header