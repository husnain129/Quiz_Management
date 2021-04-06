import { Button, useToast } from '@chakra-ui/react';
import React from 'react';

const FormButton = ({ title }) => {
	const toast = useToast();
	return (
		<Button
			mt={10}
			type="submit"
			colorScheme={'teal'}
			onClick={() => {
				toast({
					position: 'bottom-left',
					title: 'Account created.',
					description: "We've created your account for you.",
					status: 'success',
					duration: 9000,
					isClosable: true
				});
			}}
		>
			{title}
		</Button>
	);
};
export default FormButton;
