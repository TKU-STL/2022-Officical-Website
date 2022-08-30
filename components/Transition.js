import { useRouter } from 'next/router';

export const Transition = () => {
	const { asPath } = useRouter();

  return (
		<div className="effect-1">
			<AnimatePresence
	      initial={false}
	      exitBeforeEnter
	    >
	      <motion.div
	        key={asPath}
	        variants={variants}
	        animate="in"
	        initial="out"
	        exit="out"
	      >
	        {children}
	      </motion.div>
	    </AnimatePresence>
		</div>
	);
};