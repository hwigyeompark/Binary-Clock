import React, {Component} from 'react';

class BinaryClock extends Component{
    state = {
        hour1 : '0000', hour2 : '0000',
        minute1 : '0000', minute2 : '0000',
        second1 : '0000', second2 : '0000',
    };
    constructor(props){
        super(props);
        setInterval(this.binary, 1000);
    }
    binary = () => {
      const now = new Date();
      const hh = now.getHours().toString().padStart(2, '0');
      const mm = now.getMinutes().toString().padStart(2,'0');
      const ss = now.getSeconds().toString().padStart(2,'0');
      this.setState({
          hour1 : hh.substr(0,1)
      })
    };
    render(){
        return(
            <div></div>
        );
    }
}
export default BinaryClock;