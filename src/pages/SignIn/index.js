import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import logoVortex from '../../assets/logo-vortex.svg';

import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn = () => {
	const formRef = useRef(null);
	
	const handleSubmit = useCallback(async (data) => {
		try {
			formRef.current?.setErrors({});
			const schema = Yup.object().shape({
				email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
				password: Yup.string().min(6, 'No mínimo 6 digitos'),
			});

			await schema.validate(data, { abortEarly: false });
		} catch (err) {
			const errors = getValidationErrors(err)
			formRef.current?.setErrors(errors);
		}
	}, [])
	return (
		<Container>
			<Content>
				<header>
					<h1>VORTEX</h1>
					<p>PROGRAMA DE FORMAÇÃO</p>
				</header>
				<Form ref={formRef} onSubmit={handleSubmit}>
					<h1>Faça seu login</h1>

					<Input placeholder="Email" name="email" icon={FiMail} />

					<Input type="password" placeholder="Senha" name="password" icon={FiLock} />

					<Button type="submit">Entrar</Button>
					<a href="forgot">Esqueci minha senha</a>
				</Form>
				<Link to="/register">
					<FiLogIn />
					Criar conta
				</Link>
			</Content>
			<img className="App-logo" src={logoVortex} alt="GoBarber" />
		</Container>

	);
}

export default SignIn;
