import React from 'react';

const AnswerForm = () => {
	return (
		<div>
			<div className="flex justify-center" style={{ height: '91vh' }}>
				<div className="flex flex-col justify-between w-4/6 shadow-2xl bg-gray-50 my-8">
					<div className="flex flex-row items-center px-8 pt-8">
						<p className="p-3 border border-gray-400 rounded-full h-10 w-10 flex items-center justify-center">
							#1
						</p>
						<h1 className="font-bold text-lg pl-28">Which contains chemical</h1>
					</div>
					<div className="px-28 h-auto pb-11">
						<div className="flex flex-row flex-wrap justify-around">
							<p className="pr-56 pl-10 mb-3 py-3 border border-blue-800 cursor-pointer hover:bg-gray-200 rounded-md">
								Double
							</p>
							<p className="pr-56 pl-10 mb-3 py-3 border border-blue-800 cursor-pointer hover:bg-gray-200 rounded-md">
								Double
							</p>
							<p className="pr-56 pl-10 mb-3 py-3 border border-blue-800 cursor-pointer hover:bg-gray-200 rounded-md">
								Double
							</p>
							<p className="pr-56 pl-10 mb-3 py-3 border border-blue-800 cursor-pointer hover:bg-gray-200 rounded-md">
								Double
							</p>
						</div>
					</div>
					<div className="flex flex-row space-x-6 pl-12 pb-8">
						<p className="p-3 border border-gray-400 rounded-full h-8 w-8 text-gray-500 cursor-pointer text-sm hover:bg-gray-200 flex items-center justify-center">
							1
						</p>
						<p className="p-3 border border-gray-400 rounded-full h-8 w-8 text-gray-500 cursor-pointer text-sm hover:bg-gray-200 flex items-center justify-center">
							2
						</p>
						<p className="p-3 border border-gray-400 rounded-full h-8 w-8 text-gray-500 cursor-pointer text-sm hover:bg-gray-200 flex items-center justify-center">
							3
						</p>
						<p className="p-3 border border-gray-400 rounded-full h-8 w-8 text-gray-500 cursor-pointer text-sm hover:bg-gray-200 flex items-center justify-center">
							4
						</p>
						<p className="p-3 border border-gray-400 rounded-full h-8 w-8 text-gray-500 cursor-pointer text-sm hover:bg-gray-200 flex items-center justify-center">
							5
						</p>
						<p className="p-3 border border-gray-400 rounded-full h-8 w-8 text-gray-500 cursor-pointer text-sm hover:bg-gray-200 flex items-center justify-center">
							6
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnswerForm;
