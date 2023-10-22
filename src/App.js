import {Component} from 'react';

class count extends Component{
    constructor(props){
        super(props);
        this.state = {count:""};
    }
    wordCount = (event) =>{
        var c1=0;
        var inp = event.target.value;
        var text = inp.split(" ");
        var n1;
        for(var chr=0; chr<text.length;chr++){
            n1 = text[chr];
            if(n1 === ' ' || n1.indexOf("") !== -1){
                c1++;
            }
        }
        this.setState({
            count: c1
        })
    }
    render(){
        const myStyle = {
            margin:"50px",
            padding:"20px",
            width:"700px",
            boxShadow:"1px 1px 1px 1px grey",
            
        }
        return(
            <center>
            <div style = {myStyle}>
                <h2 style={{fontFamily:"-moz-initial"}}>Responsive Paragraph Word Counter</h2>
                <textarea id="data" rows="15" cols="70" placeholder="Text here..." onChange={this.wordCount}></textarea>
                <p>Word count: {this.state.count}</p>
            </div>
            </center>
        )
    }
}

export default count;
