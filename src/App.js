
import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';
//import Api from './Api';
//import Arrays from './Arrays';


class App extends Component{

    state = {

        characters : [ ]

              /*  characters : [
                    {
                           guysname: 'Nick',
                           job: 'front-end-gnome'
                       },
                       {
                           guysname: 'Dave',
                           job: 'Cleaner'
                       },
                       {
                           guysname: 'Pete',
                           job: 'CEO'
                       },
                       {
                           guysname: 'Clement',
                           job: 'Pope'
                       } 
                   ] */
        
    };


    removeCharacter = (index) => {

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

    render()
    {
        const { characters } = this.state;
        //const  characters = this.state.characters;

        //console.log('characters', characters)

        return (
            <div className="container">
            <h1 className="title">Title goes here</h1>
           
                <Table 
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                    />
                <Form  handleSubmit={this.handleSubmit}  />

                    {/* <h2>Api here</h2>
                    <Api />
                    
                    <hr />
                    <h2>Arrays here</h2>
                    <Arrays /> */}  
            </div>
        );

    }
}

export default App;