
import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component{

    state = {

        entries : [ ]
       
    };


    removeEntry = (index) => {
        
        const {entries} = this.state

        if (window.confirm("Delete this greeting?")) {
            this.setState({
            entries: entries.filter((entry, i ) => {
                    return i !== index;
                })
            });
          }
    }

    handleSubmit = (entry) => {
        this.setState( 
                { entries: [...this.state.entries, entry] }
        )
    }

    render()
    {
        const { entries } = this.state;
        //const entries = this.state.entries;
        //console.log('entries', entries)

     return (   

        <div className="container-fluid">

            <div className="row headercontainer">
                <div className="siteheader"></div>
                <div className="siteheaderbg"></div>
            </div>

            <div className="container pagecontent">

                        <div className="row titlearea">
                            <h1 className="title">Customise your Order</h1>
                        </div>

                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <Form handleSubmit={this.handleSubmit}  />
                            </div>
                        <div>

                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <Table entryData={entries}
                                        removeEntry={this.removeEntry}
                                        />
                            </div>
                        </div>

                    </div>    
                    
                </div>
            </div>
            
        </div>

        );

    }
}

export default App;