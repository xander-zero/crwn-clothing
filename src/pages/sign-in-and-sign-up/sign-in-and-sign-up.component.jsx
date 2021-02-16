import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.cmponent'
import './sign-in-and-sign-up.styles.scss'
const SignInAndSignUpPage=(props)=>(
    <div className='sign-in-and-sihn-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage;