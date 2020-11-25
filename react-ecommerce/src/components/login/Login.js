import React,{ useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './login.css';

let initialState = {
    username: "",
    password: "",
    usernameError: "",
    passwordError: ""
};

const Login = () => {
	const [form, setForm] = useState(initialState)

	let handleInput = (event) => {
		setForm({
			[event.target.name]: event.target.value
		})
	}

	let submitForm = event => {
        event.preventDefault();
        const isValid = validate();
        if (isValid) {
           	//post here
            setForm(initialState);
        }
    };

	let validate = (username, password) => {
        /*let nameError = "";
		let passwordError = "";*/
		return true
    };

	return (
		<div className='login-container'>
			<Paper elevation={4}>
					<Typography align='center' variant='h6'>
						Inicio de Sesión
					</Typography>
					<form className='login-form' onSubmit={submitForm}>
						<div className='login-center'>
							<TextField name="username" onChange={handleInput} margin="normal" required fullWidth label="Usuario" variant="outlined" autoFocus/>
						</div>
						<div className='login-center'>
							<TextField name="password" onChange={handleInput} margin="normal" required fullWidth label="Contraseña" variant="outlined" type="password"/>
						</div>
						<div className='login-center btn'>
							<Button size="large" type="submit" fullWidth variant="contained" color="primary">
								Iniciar Sesión
							</Button>
						</div>
					</form>
			</Paper>
		</div>
	)
	
}

export default Login