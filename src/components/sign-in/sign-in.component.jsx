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
        const data={
            email:this.state.email,
            password:this.state.password
        }
        console.log(data);
    }
    handleChange=event=>{
        const {value,name} =event.target;
        this.setState({[name]:value})

    }

    render(){
        return(
            <div className='sign-in'>
                <h2 className='title'>من اکانت دارم</h2>
                <span >وروود</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput lable='ایمیل' handleChange={this.handleChange} type='email' name='email' value={this.state.email} required />                    
                    <FormInput
                    name='password'
                    type='password'
                    lable='رمز کاربری'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    required
                    />
                    <CustomButton type='submit'>ورود</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;