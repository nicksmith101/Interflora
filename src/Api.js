import React, {Component} from 'react';


class Api extends Component{


state = {

    data: []

};


 // Code is invoked after the component is mounted/inserted into the DOM tree.
componentDidMount(){
    const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";

    fetch(url)
    
    //.then(  function(result) {return result.json(); }) //same as
    .then(result => result.json())

    .then(result => this.setState( { data:result} ))

}


render()
    {
    const {data} = this.state;

    const result = data.map((someDataItem, index) =>  { 
            return <li key={index}>{someDataItem}</li>; 
        });

    return <ul>{result}</ul>

    }


}

export default Api
