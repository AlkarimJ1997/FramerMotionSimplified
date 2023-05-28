'use client';

import { motion, useAnimation } from 'framer-motion';

const Box5 = () => {
	const control = useAnimation();

	const handleMoveRight = () => {
		control.start({
			x: 750,
			transition: { duration: 2 },
		});
	};

	const handleMoveLeft = () => {
		control.start({
			x: 0,
			transition: { duration: 2 },
		});
	};

	const handleCircle = () => {
		control.start({
			borderRadius: '50%',
			transition: { duration: 2 },
		});
	};

	const handleSquare = () => {
		control.start({
			borderRadius: '0%',
			transition: { duration: 2 },
		});
	};

	const handleStop = () => control.stop();

	return (
		<div className='pb-80'>
			<button onClick={handleMoveRight} className='btn-primary'>
				Move Right
			</button>
			<button onClick={handleMoveLeft} className='btn-primary'>
				Move Left
			</button>
			<button onClick={handleCircle} className='btn-primary'>
				Circle
			</button>
			<button onClick={handleSquare} className='btn-primary'>
				Square
			</button>
			<button onClick={handleStop} className='btn-primary'>
				Stop
			</button>
			<motion.div
				animate={control}
				className='w-80 aspect-[1/1] flex flex-col justify-center items-center bg-emerald-300'
			/>
		</div>
	);
};

export default Box5;
