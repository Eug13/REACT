import React from 'react'


class InputCordinator extends React.Component {
    constructor(props) {
        super(props);
        this.handlerIsNumber = this.handlerIsNumber.bind(this);
    }

  handlerIsNumber(e){
      let ok = /\d+/;
      let res = ok.test(e.target.value);
      if(res === true){
         this.props.onChange(e.target.value);
      }
      else if(res !== true){
        console.error('Your input is not valid put here numbers only!')
        this.props.onChange('0')
      }

  }  
    render() {

        return (
            <div>
                <form >
                    <label>
                        {this.props.label}:
                        <input type={this.props.type} value={this.props.value} onChange={this.handlerIsNumber} />
                    </label>
                    <br />
                </form>
            </div>
        );
    }
}


export default InputCordinator