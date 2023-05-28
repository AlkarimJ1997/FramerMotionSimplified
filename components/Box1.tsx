'use client';

import {motion} from 'framer-motion';
import {useState} from 'react';

const Box1 = () => {
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    return (
        <div className='pb-80'>
            <motion.div
                animate={{
                    x: isAnimating ? 750 : 0,
                    opacity: isAnimating ? 1 : 0.5,
                    rotate: isAnimating ? 360 : 0,
                }}
                initial={{
                    opacity: 0.1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 60,
                }}
                onClick={() => setIsAnimating(isAnimating => !isAnimating)}
                className='w-80 aspect-[1/1] flex flex-col justify-center items-center bg-emerald-300 cursor-pointer'
            />
        </div>
    );
};

export default Box1;
