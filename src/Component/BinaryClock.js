import React, {Component} from 'react';
import Number from "./Number";

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
          hour1 : hh.substr(0,1),
          hour2 : hh.substr(-1),
          minute1 : mm.substr(0,1),
          minute2 : mm.substr(-1),
          second1 : ss.substr(0,1),
          second2 : ss.substr(-1)
      });
    };
    render(){
        return(
            <div>
                <Number/>
            </div>
        );
    }
}
export default BinaryClock;