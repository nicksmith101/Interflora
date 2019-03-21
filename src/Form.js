import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
                guysname: '',
                job: ''
        };

        this.state = this.initialState;

    }

    handleChange = event => {

        const {name, value} = event.target;
        this.setState( {[name]: value } );
    }


    submitForm = () => {
        this.props.handleSubmit(this.state); // submit data, using the state of this page
        this.setState(this.initialState); // reset form fields to empty
    }


    render()
    {
        const {guysname, job} = this.state;

        return(
        
            <form>
                <label>Name</label>
                <input
                    type="text"
                    name="guysname"
                    value={guysname}
                    onChange={this.handleChange}
                    />
                <label>Job Title</label>    
                <input 
                    type="text"
                    name="job"
                    value={job}
                    onChange={this.handleChange}
                    />

               <input type="button"
                    value="Submit"
                    onClick={this.submitForm}
                    />

            </form>
        )

    }
}

export default Form