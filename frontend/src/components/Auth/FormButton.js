import { Button, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';

const FormButton = ({ onClick }) => {
	const toast = useToast();
	let [error, setError] = useState(false);
	return (
		<Button
			mt={10}
			type="submit"
			colorScheme={error ? 'red' : 'teal'}
			onClick={() => {
				if (onClick()) {
					setError(false);
					toast({
						position: 'bottom-left',
						title: 'Account created.',
						description: "We've created your account for you.",
						status: 'success',
						duration: 9000,
						isClosable: true
					});
				} else {
					setError(true);
					toast({
						position: 'bottom-left',
						title: 'Error.',
						description: 'Password must be greater than 8 Character',
						status: 'error',
						duration: 9000,
						isClosable: true
					});
				}
			}}
		>
			Login
		</Button>
	);
};
export default FormButton;
