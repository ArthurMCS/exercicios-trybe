import React from "react";

class Form extends React.Component{

    constructor() {
        super();
        this.state = {
           
        }
    }
 toUpperCase = (event) => {
        event.target.value = event.target.value.toUpperCase()  
    }

    render() {
        return (
            <form>
                <fieldset>
                    <label htmlFor='name'>
                        Name: 
                        <input
                            type="name"
                            id="name"
                            name="name"
                            required
                            maxLength="40"
                            onChange={this.toUpperCase}
                        />
                    </label>
                </fieldset>
            </form>
        )
    }
}

export default Form;