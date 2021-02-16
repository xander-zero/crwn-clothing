import reactDom from "react-dom";
import React from 'react'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-buttton/custom-buton.component";
import './sign-up.styles.scss'
class SignUp extends React.Component{
    constructor(){
        super();

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPass:''
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        const {displayName,email,password,confirmPass} =this.state;
        if(password!==confirmPass){
            alert("password is not true");
        }
        this.setState({displayName:'',email:'',password:'',confirmPas:''})
    }

    handleChange=(event)=>{
        const {name,value}=event.target;
        this.setState({[name]:value})
    }
    render(){
        const {displayName,email,password,confirmPass} =this.state
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    name='displayName'
                    type='text'
                    lable='displayName'
                    value={displayName}
                    handleChange={this.handleChange}
                    required
                    />
                     <FormInput
                    name='email'
                    type='email'
                    lable='email'
                    value={email}
                    handleChange={this.handleChange}
                    required
                    />
                     <FormInput
                    name='password'
                    type='password'
                    lable='password'
                    value={password}
                    handleChange={this.handleChange}
                    required
                    />
                     <FormInput
                    name='confirmPass'
                    type='password'
                    lable='confirmPass'
                    value={confirmPass}
                    handleChange={this.handleChange}
                    required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;