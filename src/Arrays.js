
import React, {Component} from 'react';


class Arrays extends Component{

    state = {

         arrayOfObjects : [
                            { guysname: 'Nick', job: 'front-end-gnome' },
                            { guysname: 'Dave', job: 'Cleaner'},
                            { guysname: 'Pete', job: 'CEO'},
                            { guysname: 'Clement', job: 'Pope'}
                        ],                   
                   anArray : [ 'a', 'b', 'c', 'd'],
                   anObject: { thingA: 'cheese', thingB: 'chips', thingC: 'plutonium'}          
    };

/*     removeCharacter = (index) => {

        const {characters} = this.state;

        this.setState({
                characters: characters.filter((character, i ) => {
                    return i !== index;
                })
            });
    }

    handleSubmit = (character) => {
        this.setState( 
                { characters: [...this.state.characters, character] }
        )
    } 
*/

    render()
    {
        const { arrayOfObjects, anObject, anArray } = this.state;

        //const  characters = this.state.characters;

        console.log('anArray', anArray)
        console.log('arrayOfObjects', arrayOfObjects)
        console.log('anObject', anObject)

        return (
            <div className="container">
             
                <div className="tableouter">
                    <div className="dataheader">Array</div>
                    {anArray.map( (values, index) => ( <div className="datarow" key={index}>{index}: {values}</div>))}
                </div>  

                <div className="tableouter">  
                    <div className="dataheader">arrayOfObjects</div>
                    {arrayOfObjects.map( (values, index) => (<div className="datarow" key={index}>{index}: {values.guysname}/{values.job} </div>) )}
                </div>

                <div className="tableouter">  
                    <div className="dataheader">Object</div>
                        {Object.keys(anObject).map( key => ( <div className="datarow" key={key}>{key}- {anObject[key]} </div>    ))
                            
                        }
                    <div className="datarow"></div>
    
                </div>  

            </div>
        );

    }
}

export default Arrays;