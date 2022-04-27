// import React, {useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup'

const schemaSignIn = object().shape({
    email: string().email().required(),
    password: string().min(2).required()
})

export default function LoginPage() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: handleSubmit,
        validationSchema: schemaSignIn,
        validateOnMount: true //валидация с начала самого
    })

    console.log(formik)

    const handleSubmit = async (values, { setSubmiting }) => {
        const {email, password} = values;

        const response = await fetch('https://tms-js-pro-back-end.herokuapp.com/api/users/signin', {
            method:'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            }),
        })

        const data = await response.json()
        
        sessionStorage.token = data.token;
        sessionStorage.email = data.email;
        navigate('/', {replace: true});

        setSubmiting(false)
    }

    return(
        <div style={{height: '100vh', width:'100vw', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div style={{display:'grid', gridTemplateColumns:'1fr', gap: 16}}>
            
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='email'>Email Address</label>
                <input
                value={formik.values.email} 
                name='email'
                type='email'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}/>

                {formik.touched.email && !!formik.errors.email && (<span style={{color:'#b71c1c'}}>{formik.errors.email}</span>)}

                <label htmlFor='email'>Password</label>
                <input 
                value={formik.values.password} 
                name='email'
                type='email'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}/>

                {formik.touched.password && !!formik.errors.password && (<span style={{color:'#b71c1c'}}>{formik.errors.password}</span>)}

                <button type='submit' disabled={!formik.isValid && !formik.isSubmiting}>Sign in</button>
            </form>
            </div>
        </div>
    )
}