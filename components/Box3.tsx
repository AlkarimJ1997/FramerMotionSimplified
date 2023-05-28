'use client';

import { motion } from 'framer-motion';

const Box3 = () => {
	const boxVariants = {
		hidden: { x: '-100vw' },
		visible: {
			x: 0,
			transition: {
				delay: 0.5,
				when: 'beforeChildren',
				staggerChildren: 0.2,
			},
		},
	};

	const listVariants = {
		hidden: { x: -10, opacity: 0 },
		visible: { x: 0, opacity: 1 },
	};

	return (
		<div className='pb-80'>
			<motion.div
				variants={boxVariants}
				animate='visible'
				initial='hidden'
				className='w-80 aspect-[1/1] flex flex-col justify-center items-center bg-emerald-300'>
				{[...Array(3)].map((_, i) => (
					<motion.li
						key={i}
						variants={listVariants}
						className='w-2 aspect-[1/1] bg-white p-8 list-none m-2'
					/>
				))}
			</motion.div>
		</div>
	);
};

export default Box3;
