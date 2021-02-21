import { Avatar, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import { FiUser } from 'react-icons/fi';
import { GoNote } from 'react-icons/go';
import ProfileMenu from '../Utils/ProfileMenu';
import QuizMenu from '../Utils/QuizMenu';

const Profile = () => {
	const [menu, setMenu] = React.useState(true);
	return (
		<div className="flex flex-col">
			<div className="flex flex-row justify-between items-center shadow-md p-2">
				<div className="flex flex-row space-x-3 p-3 items-center">
					<Wrap>
						<WrapItem>
							<Avatar size="lg" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
						</WrapItem>
					</Wrap>
					<div className="flex flex-col">
						<h1 className="font-bold text-lg">Husnain</h1>
						<p className="font-light">mlhlk1212@gmail.com</p>
					</div>
				</div>
				<div className="p-3">
					<div className="flex flex-row items-center text-center space-x-2 bg-red-500 text-white cursor-pointer rounded-lg p-2 ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
							/>
						</svg>
						<p>Delete Account</p>
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-center pt-7 space-x-3 bg-gray-100 h-auto pb-16">
				<div className="flex flex-col space-y-1">
					<div
						className="flex flex-row space-x-2 text-blue-700 items-center px-6 bg-white cursor-pointer w-80 h-16 rounded-xl shadow-lg"
						onClick={() => setMenu(true)}
					>
						<FiUser className="w-5 h-5 font-md"></FiUser>
						<p className="font-bold">Profile</p>
					</div>
					<div
						className="flex flex-row space-x-2 text-blue-700 items-center  px-6 bg-white cursor-pointer w-80 h-16 rounded-xl shadow-lg"
						onClick={() => setMenu(false)}
					>
						<GoNote className="w-5 h-5"></GoNote>
						<p className="font-bold font-md">Quizes</p>
					</div>
					<div className="flex flex-row space-x-2"></div>
				</div>
				<div className="w-3/5 rounded-2xl" style={{ minHeight: '59vh' }}>
					{menu ? <ProfileMenu /> : <QuizMenu />}
				</div>
			</div>
		</div>
	);
};

export default Profile;
