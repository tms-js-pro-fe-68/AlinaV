
import { Box, Button, Paper, TextField, Typography, ThemeProvider } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup'

const schemaSignIn = object().shape({
    email: string().email().required(),
    password: string().min(2).required()
})

export default function LoginPage() {
    const navigate = useNavigate();

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

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: handleSubmit,
        validationSchema: schemaSignIn,
        validateOnMount: true 
    })

    console.log(formik)

    return(
        <Box className='justify-center items-center'>
            <Paper
            component='form'
            className='grid grid-cols-1 gap-4 p-4 w-1/2'
            sx={{display:'grid', 
                gridTemplateColumns:'1fr', 
                gap: 2,
                p: 4,
                color: '#8bc34a'
            }}
            onSubmit={formik.handleSubmit}>
                
                <Typography variant='h6'>Please sign in</Typography>

                <TextField
                label='Email Address'
                id='email'
                name='email'
                type='email'
                onBlur={formik.handleBlur}
                value={formik.values.email} 
                onChange={formik.handleChange}
                error={formik.touched.email && !!formik.errors.email}
                helperText={
                    formik.touched.email && !!formik.errors.email && formik.errors.email
                }/>

                {formik.touched.email && !!formik.errors.email && (<span style={{color:'#b71c1c'}}>{formik.errors.email}</span>)}

                <TextField
                label='Password' 
                value={formik.values.password} 
                name='password'
                type='password'
                id='password'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.password && !!formik.errors.password}
                helperText={
                    formik.touched.password && !!formik.errors.password && formik.errors.password
                }/>

                {formik.touched.password && !!formik.errors.password && (<span style={{color:'#b71c1c'}}>{formik.errors.password}</span>)}

                <Button type='submit' disabled={!formik.isValid && !formik.isSubmiting}>Sign in</Button>
            </Paper>
        </Box>
    )
}