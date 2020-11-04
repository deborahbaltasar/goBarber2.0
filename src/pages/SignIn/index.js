import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Form } from '@unform/web';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

function SignIn() {
	const handleSubmit = (data) => {
		console.log(data)
	}
	return (
		<Container>
			<Content>
				<img src={logoImg} alt="GoBarber" />
				<Form onSubmit={handleSubmit}> 
					<h1>Faça seu logon</h1>

					<Input placeholder="Email" name="email" icon={FiMail}/>

					<Input type="password" placeholder="Senha" name="password" icon={FiLock} />

					<Button type="submit">Entrar</Button>
					<a href="forgot">Esqueci minha senha</a>
				</Form>
				<Link to="/register">
					<FiLogIn />
					Criar conta
				</Link>
			</Content>
			<Background />
		</Container>

	);
}

export default SignIn;
