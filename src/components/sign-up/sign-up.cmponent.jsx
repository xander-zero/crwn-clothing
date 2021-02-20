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
                <h2 className='title'>من اکانت ندارم</h2>
                <span>ثبت نام</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    name='displayName'
                    type='text'
                    lable='نام کاربری'
                    value={displayName}
                    handleChange={this.handleChange}
                    required
                    />
                     <FormInput
                    name='email'
                    type='email'
                    lable='ایمیل'
                    value={email}
                    handleChange={this.handleChange}
                    required
                    />
                     <FormInput
                    name='password'
                    type='password'
                    lable='رمز کاربری'
                    value={password}
                    handleChange={this.handleChange}
                    required
                    />
                     <FormInput
                    name='confirmPass'
                    type='password'
                    lable='تایید رمز کاربری'
                    value={confirmPass}
                    handleChange={this.handleChange}
                    required
                    />
                    <CustomButton type='submit'>ثبت نام</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;