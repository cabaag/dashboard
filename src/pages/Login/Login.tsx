import { Button, Card, CardContent, Container, Grid, IconButton, InputAdornment, makeStyles, TextField, Typography } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import MuiAlert from '@material-ui/lab/Alert';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { login } from '../../services/auth.service';
import { GlobalContext } from '../../globalContext';

function Alert(props: any) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles({
	root: {
		height: '100vh',
		display: 'flex',
		justifyItems: 'center',
		alignItems: 'center',
	},
});

const loginSchema = Yup.object().shape({
	email: Yup.string()
		.email()
		.required('Required'),
	password: Yup.string()
		.required('Required'),
});

type Values = {
	email: string;
	password: string;
};

function Login() {
	const classes = useStyles();
	const history = useHistory();
	const context = useContext(GlobalContext);

	const [showPassword, setShowPassword] = React.useState(false);
	const [openAlert, setOpenAlert] = React.useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event: any) => {
		event.preventDefault();
	};

	const handleSubmit = (
		values: Values,
		{ setSubmitting }: FormikHelpers<Values>
	) => {
		login(values.email, values.password).then((response) => {
			localStorage.setItem('token', JSON.stringify(response.headers.authorization));
			context.setToken(response.headers.authorization);
			history.push('/');
		}).catch(() => {
			setOpenAlert(true);
			setSubmitting(false);
		});
	};

	return (
		<Container className={classes.root} fixed>
			<Grid container spacing={3} justify='center'
				alignItems='center'>
				<Snackbar
					anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
					open={openAlert} autoHideDuration={3000}
					onClose={() => setOpenAlert(false)}>
					<Alert severity='error'>
						An error happened!
										</Alert>
				</Snackbar>

				<Grid item xs={12} sm={8} md={6} lg={4} >
					<Card>
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								Login
														</Typography>
							<Formik
								initialValues={{
									email: '',
									password: '',
								}}
								validationSchema={loginSchema}
								onSubmit={handleSubmit}
							>
								{({ errors, touched, isValid }) => (
									<Form>
										<Grid container direction='column' spacing={3}>
											<Grid item>
												<Field
													as={TextField}
													label='Email'
													name='email'
													variant='outlined'
													fullWidth
													error={errors.email && touched.email}
													helperText={errors.email} />
											</Grid>
											<Grid item>
												<Field
													as={TextField}
													label='Password'
													name='password'
													variant='outlined'
													type={showPassword ? 'text' : 'password'}
													fullWidth
													InputProps={{
														endAdornment: (
															<InputAdornment position='end'>
																<IconButton
																	aria-label='toggle password visibility'
																	onClick={handleClickShowPassword}
																	onMouseDown={handleMouseDownPassword}
																>
																	{showPassword ? <Visibility /> : <VisibilityOff />}
																</IconButton>
															</InputAdornment>
														)
													}}
													error={errors.password && touched.password}
													helperText={errors.password}
												/>
											</Grid>
											<Grid item container direction='row' justify='space-between'>
												<Grid item>
													<Button color='secondary' type='button'>
														Create account
																										</Button>
												</Grid>
												<Grid item>
													<Button variant='contained' color='primary' type='submit' disabled={!isValid}>
														Send
																										</Button>
												</Grid>
											</Grid>
										</Grid>
									</Form>
								)}
							</Formik>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container >
	);
}

export default Login;
