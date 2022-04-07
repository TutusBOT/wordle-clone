export const getStaticProps = async () => {
	const res = await fetch("http://localhost:3000/api/");
	const data = await res.json();

	return {
		props: { ninjas: data },
	};
};

const Ninjas = ({ ninjas }: { ninjas: any }) => {
	console.log(ninjas);

	return (
		<div>
			<h1>All Ninjas</h1>
			{ninjas.map((ninja: any) => (
				<div key={ninja}>ninja</div>
			))}
		</div>
	);
};

export default Ninjas;
