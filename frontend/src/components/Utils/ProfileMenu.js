import { Table, Tbody, Td, Th, Tr } from '@chakra-ui/react';
import React from 'react';

const ProfileMenu = () => {
	return (
		<div>
			<div className="flex flex-col h-auto bg-white pb-10 rounded-lg">
				<div className="flex flex-row justify-between p-7 font-bold text-lg items-center text-blue-700">
					<h1 className="text-2xl">Account</h1>
					<div className="flex flex-row space-x-1 items-center text-center hover:bg-gray-100 cursor-pointer rounded-lg p-2">
						<p>Edit</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
							/>
						</svg>
					</div>
				</div>
				<hr />
				<div className="w-full h-96">
					<img
						src="https://images.unsplash.com/photo-1510832198440-a52376950479?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
						className="p-2 object-cover w-full rounded-xl h-96"
						alt="cover image"
					/>
				</div>
				<div className="flex flex-col space-y-3 p-3 pt-5 text-blue-900">
					<h1 className="font-bold text-xl">Profile Details</h1>
					<Table variant="unstyle">
						<Tbody>
							<Tr>
								<Td>Username</Td>
								<Td>Hunny Khan</Td>
							</Tr>
							<Tr>
								<Td>Email</Td>
								<Td>mlhlk1212@gmail.com</Td>
							</Tr>
							<Tr>
								<Td>Password</Td>
								<Td>*******</Td>
							</Tr>
						</Tbody>
					</Table>
				</div>
			</div>
			<div className="flex flex-col h-auto bg-white pb-10 rounded-lg mt-5">
				<div className="flex flex-row justify-between p-7 font-bold text-lg items-center text-blue-700">
					<h1 className="text-2xl">Profile</h1>
					<div className="flex flex-row space-x-1 items-center text-center hover:bg-gray-100 cursor-pointer rounded-lg p-2">
						<p>Edit</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
							/>
						</svg>
					</div>
				</div>
				<hr />
				<div className="pt-5 pl-5">
					<Table variant="unstyle">
						<Tbody>
							<Tr>
								<Td>
									<Th>Name</Th>
								</Td>
								<Td>Hunny Khan</Td>
							</Tr>
							<Tr>
								<Td>
									<Th>Bio</Th>
								</Td>
								<Td>Computer Scientists</Td>
							</Tr>
							<Tr>
								<Td>
									<Th>BirthDay</Th>
								</Td>
								<Td>22-sep-1998</Td>
							</Tr>
							<Tr>
								<Td>
									<Th>Courtry</Th>
								</Td>
								<Td>Pakistan</Td>
							</Tr>
						</Tbody>
					</Table>
				</div>
			</div>
		</div>
	);
};

export default ProfileMenu;
