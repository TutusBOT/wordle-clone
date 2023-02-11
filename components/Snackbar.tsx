interface Snackbar {
	message: string;
}

const Snackbar = ({ message }: Snackbar) => {
	return (
		<div className="fixed top-20 left-1/2 -translate-x-1/2 text-2xl bg-white text-black rounded-md px-4 py-2 z-10 animate-appear">
			{message}
		</div>
	);
};
export default Snackbar;
