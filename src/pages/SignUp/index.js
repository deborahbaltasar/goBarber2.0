import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import logoVortex from '../../assets/logo-vortex.svg';

import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp = () => {
	const formRef = useRef(null);

	const handleSubmit = useCallback(async (data) => {
		try {
			formRef.current?.setErrors({});
			const schema = Yup.object().shape({
				name: Yup.string().required('Nome obrigatório'),
				email: Yup.string().required('Email obrigatório').email('Digite um email válido'),
				password: Yup.string().min(6, 'No mínimo 6 digitos'),
			});

			await schema.validate(data, {abortEarly: false});
		} catch (err) {
			const errors = getValidationErrors(err)
			formRef.current?.setErrors(errors);
		}
	}, [])
	return ( 
		<Container>
			
			<img src={logoVortex} alt="Vortex" />
			<Content>
				<header>
					<h1>VORTEX</h1>
					<p>PROGRAMA DE FORMAÇÃO</p>
				</header>
				<Form ref={formRef} onSubmit={handleSubmit}>
					<h1>Faça seu cadastro</h1>

					<Input placeholder="Nome" name="name" icon={FiUser}/>

					<Input placeholder="Email" name="email" icon={FiMail}/>

					<Input type="password" name="password" placeholder="Senha" icon={FiLock} />

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
