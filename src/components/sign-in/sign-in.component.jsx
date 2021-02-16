import React from 'react'
import CustomButton from '../custom-buttton/custom-buton.component';
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
class SignIn extends React.Component{
    constructor(props){
        super();

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({email:'',password:''});
        console.log(this.email,this.password)
    }
    handleChange=event=>{
        const {value,name} =event.target;
        this.setState({[name]:value})

    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an accoun</h2>
                <span >Sign in with your email</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput lable='email' handleChange={this.handleChange} type='email' name='email' value={this.state.email} required />                    
                    <FormInput lable='password' handleChange={this.handleChange} name='password ' type='password' value={this.state.password} />
                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;