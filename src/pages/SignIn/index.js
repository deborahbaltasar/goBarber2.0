import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

function SignIn() {
	return (
		<Container>
			<Content>
				<img src={logoImg} alt="GoBarber" />
				<form>
					<h1>Faça seu logon</h1>

					<Input placeholder="Email" icon={FiMail}/>

					<Input type="password" placeholder="Senha" icon={FiLock} />

					<Button type="submit">Entrar</Button>
					<a href="forgot">Esqueci minha senha</a>
				</form>
				<a href="new-account">
					<FiLogIn />
					Criar conta
				</a>
			</Content>
			<Background />
		</Container>

	);
}

export default SignIn;
