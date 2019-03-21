import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
                greeting: '',
                category: ''
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
        const {greeting, category} = this.state;

        return(
        
            <form>
                <div className="greetingsarea">
                    <label>Your Greeting:</label>
                    <textarea
                    name="greeting"
                    value={greeting}
                    onChange={this.handleChange}
                    />
                </div>

                <div className="typecatarea">
                    <label>Type your own Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={category}
                        onChange={this.handleChange}
                        />

                </div>

                <div className="selectcatarea">
                    <label>or Select a Category:</label> 

                    <select value={category} name="category" onChange={this.handleChange}>
                        <option selected value="type category here">Choose one</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Christmas">Christmas</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Wedding">Wedding</option>
                    </select> 
                </div>

                <div className="submitbuttonarea" >
                    <input className="submitbutton" type="button" disabled={!(this.state.greeting && this.state.category)}
                                    value="Save"
                                    onClick={this.submitForm}
                                    />
                </div>

            </form>
        )

    }
}

export default Form