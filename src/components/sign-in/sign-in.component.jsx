import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit= event =>{
        event.prevenDefault();
        this.setState({ email:'',password:'' })
    }

    handleChange = event =>{
        const { value,name } = event.target;
        this.setState({ [name]:value })
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>
                    I already have an account
                </h2>
                <span>
                    Sign In with your Email and Password
                </span>
                <form onSubmit={ this.handleSubmit }>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label="Email" required></FormInput>
                    
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label="Password" required></FormInput>
                    <div className='buttons'>
                    <CustomButton type='submit' >SIGN-IN</CustomButton>
                    
                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
                        SIGN-IN WITH GOOGLE
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;