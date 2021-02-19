import { Avatar, FormControl, FormLabel, Input, Table, Tbody, Td, Th, Tr, Wrap, WrapItem } from '@chakra-ui/react';
import React, { useState } from 'react';

const ProfileMenu = () => {
	const [account, setAccount] = useState(true);
	const [profile, setProfile] = useState(true);
	return (
		<div>
			{/* ........Account DETAIL......... */}
			<div className="flex flex-col h-auto bg-white pb-10 rounded-lg">
				{/* <AccountDetails></AccountDetails> */}
				{account ? (
					<AccountDetails setAccount={setAccount}></AccountDetails>
				) : (
					<AccountDetailsEdit setAccount={setAccount} />
				)}
			</div>
			{/* ........Account DETAIL END......... */}

			{/* .........PROFILE DETAIL........... */}
			<div className="flex flex-col h-auto bg-white pb-10 rounded-lg mt-5">
				{profile?
				<ProfileDetails setProfile={setProfile}/>
				:
				<ProfileDetailsEdit setProfile={setProfile}/>
			}
			</div>

			{/* .........PROFILE DETAIL END........... */}
		</div>
	);
};

const AccountDetails = ({ setAccount }) => {
	return (
		<div>
			<div className="flex flex-row justify-between p-7 font-bold text-lg items-center text-blue-700">
				<h1 className="text-2xl">Account</h1>
				<div
					className="flex flex-row space-x-1 items-center text-center hover:bg-gray-100 cursor-pointer rounded-lg p-2"
					onClick={() => setAccount(false)}
				>
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
	);
};

const AccountDetailsEdit = ({ setAccount }) => {
	return (
		<div>
			<div className="flex flex-col space-y-8 w-full h-auto p-2">
				<div className="flex justify-center items-center group cursor-pointer transition duration-300 relative hover:opacity-80 ">
					<img
						src="https://images.unsplash.com/photo-1510832198440-a52376950479?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
						className="object-cover w-full rounded-xl h-96"
						alt="cover image"
					/>
					<div className="absolute text-white text-center w-auto h-auto px-4 py-3 font-bold text-xl rounded-xl bg-blue-900 opacity-0 group-hover:opacity-100">
						<h1 className="object-center ">Change Background</h1>
					</div>
				</div>
				<div className="flex flex-col space-y-6 items-center">
					<div className="flex flex-row space-x-6 items-center">
						<Wrap>
							<WrapItem>
								<Avatar size="lg" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
							</WrapItem>
						</Wrap>
						<div className="p-2 text-white w-auto h-auto rounded-xl cursor-pointer bg-blue-600 hover:bg-blue-800 ">
							<p>Change Profile</p>
						</div>
					</div>
					<div className="flex flex-col space-y-2 w-3/4">
						<FormControl id="first-name" isRequired>
							<FormLabel>username</FormLabel>
							<Input placeholder="Enter Username" />
						</FormControl>
						<FormControl id="description" isRequired>
							<FormLabel>Email</FormLabel>
							<Input placeholder="Enter Email" />
						</FormControl>
						<FormControl id="description" isRequired>
							<FormLabel>Password</FormLabel>
							<Input type="password" placeholder="Enter Password" />
						</FormControl>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<h1
						className="px-3 py-3 rounded-xl w-auto h-auto text-white bg-red-600 cursor-pointer hover:bg-red-900"
						onClick={() => setAccount(true)}
					>
						Save Changes
					</h1>
				</div>
			</div>
		</div>
	);
};

const ProfileDetails = ({setProfile}) => {
	return (
		<div>
			<div className="flex flex-row justify-between p-7 font-bold text-lg items-center text-blue-700">
				<h1 className="text-2xl">Profile</h1>
				<div className="flex flex-row space-x-1 items-center text-center hover:bg-gray-100 cursor-pointer rounded-lg p-2" onClick={()=>setProfile(false)}>
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
	);
};

const ProfileDetailsEdit = ({setProfile}) => {
	return (
		<div className="flex flex-col  items-center">
			<h1 className="font-bold text-xl py-8">Edit Profile Details</h1>
			<div className="flex flex-col space-y-2 w-3/4">
				<FormControl id="first-name" isRequired>
					<FormLabel>Name</FormLabel>
					<Input placeholder="Change Name" />
				</FormControl>
				<FormControl id="description" isRequired>
					<FormLabel>Bio</FormLabel>
					<Input placeholder="Change Bio" />
				</FormControl>
				<FormControl id="description" isRequired>
					<FormLabel>Birthday</FormLabel>
					<Input type="password" placeholder="Change Birthday" />
				</FormControl>
				<FormControl id="description" isRequired>
					<FormLabel>Country</FormLabel>
					<Input type="password" placeholder="Change Country" />
				</FormControl>
			</div>
			<div className="flex items-center justify-center pt-7">
				<h1 className="px-3 py-3 rounded-xl w-auto h-auto text-white bg-red-600 cursor-pointer hover:bg-red-900"  onClick={()=>setProfile(true)}>
					Save Changes
				</h1>
			</div>
		</div>
	);
};

export default ProfileMenu;
