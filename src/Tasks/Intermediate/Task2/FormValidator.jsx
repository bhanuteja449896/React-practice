import { useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

export default function FormValidator(){
    const [values,setValues] = useState({
        email:"",
        password:""
    });
    
    const [errors,setErrors] = useState({
        email:"",
        password:""
    })

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleEmailChange=(value)=>{
        setValues({...values,email:value});
        if(!emailRegex.test(value)){
            setErrors({...errors,email:'Invalid email format'})
        }else{
            setErrors({...errors,email:''})
        }
    }

    const handlePasswordChange=(value)=>{
        setValues({...values,password:value})
        if(value.length < 6){
            setErrors({...errors,password:"Password must be > 6 chars"})
        }else{
            setErrors({...errors,password:''})
        }
    }

    const handleSubmit=()=>{
        if(!errors.email && !errors.password && values.email && values.password){
            alert('Form successfully submitted')
            console.log('Form submitted')
        }else{
            alert('Fix errors before submitting')
        }
    }

    const isFormValid = !errors.email && !errors.password && values.email && values.password



    return(
        <div>
            <EmailInput
            onChange={handleEmailChange}
            value={values.email}
            error={errors.email}/>

            <PasswordInput
            onChange={handlePasswordChange}
            value={values.password}
            error={errors.password}/>
            
            <button onClick={handleSubmit} disabled={!isFormValid}>Submit</button>
        </div>
    )
}