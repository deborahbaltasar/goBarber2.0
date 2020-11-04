import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

function SignUp() {
	const handleSubmit = (data) => {
		console.log(data)
	}
	return ( 
		<Container>
			<Background />
			<Content>
				<img src={logoImg} alt="GoBarber" />
				<Form onSubmit={handleSubmit}>
					<h1>Faça seu cadastro</h1>

					<Input placeholder="Name" icon={FiUser}/>

					<Input placeholder="Email" icon={FiMail}/>

					<Input type="password" placeholder="Senha" icon={FiLock} />

					<Button type="submit">Cadastrar</Button>
	
				</Form>
				<Link to="/">
					<FiArrowLeft />
					Voltar para logon
				</Link>
			</Content>
		</Container>

	);
}

export default SignUp;
