import React, {Component} from 'react';


import './sign-in.scss';

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    };

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({
            email: '',
            password: ''
        })
    };

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({ [name] : value });
    };

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                  <label>Email</label>
                  <input type="email" 
                         value={this.state.email}
                         name="email"
                         onChange = {this.handleChange}
                         required />
                  <label>Password</label>       
                  <input type="password"
                         value={this.state.password}
                         name="password"
                         onChange={this.handleChange}
                         required />
                         
                  <input type="submit" value="Submit Form" />        
                
                    
                </form>        
            </div>
        )
    }
};

export default SignIn;