'use client';

import { Variants, motion } from 'framer-motion';

const Box4 = () => {
	const boxVariants: Variants = {
		show: {
			scale: [1, 1.4, 1.4, 1, 1],
			borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            rotate: [0, 0, 270, 270, 0],

			transition: {
				duration: 2,
			},
		},
	};

	return (
		<div className='pb-80'>
			<motion.div
				variants={boxVariants}
				animate='show'
				className='w-80 aspect-[1/1] flex flex-col justify-center items-center bg-emerald-300'
			/>
		</div>
	);
};

export default Box4;
