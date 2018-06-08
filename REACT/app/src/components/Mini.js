

class Clockmini extends Clock {
    constructor(props) {
        console.log(props);
        super(props);
          
        }

        componentDidMount() {
            this.timerID = setInterval(
                () => this.tick(),
                10000
            );
        }
    
        componentWillUnmount() {
            clearInterval(this.timerID);
        }

        tick() {
            this.setState({
                date: new Date()
            });
    }
}

