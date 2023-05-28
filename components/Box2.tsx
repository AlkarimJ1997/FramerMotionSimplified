'use client';

import { motion } from 'framer-motion';

const Box2 = () => {
	return (
		<div className='pb-80'>
			<motion.div
				drag
				dragConstraints={{
					right: 20,
					left: 20,
					top: 5,
					bottom: 5,
				}}
				whileHover={{
					scale: 1.1,
				}}
				whileTap={{
					scale: 0.9,
				}}
				className='w-80 aspect-[1/1] flex flex-col justify-center items-center cursor-pointer bg-emerald-300'
			/>
		</div>
	);
};

export default Box2;
