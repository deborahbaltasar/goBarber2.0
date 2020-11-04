import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp = () => {
	const formRef = useRef(null);

	console.log(formRef)
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
			<Background />
			<Content>
				<img src={logoImg} alt="GoBarber" />
				<Form ref={formRef} onSubmit={handleSubmit}>
					<h1>Faça seu cadastro</h1>

					<Input placeholder="Name" name="name" icon={FiUser}/>

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
