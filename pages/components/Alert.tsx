import React, { useEffect, useRef } from "react";

function Alert({ alertText }: { alertText: string }) {
	const alert = useRef<HTMLDivElement>(null);
	// useEffect(() => {

	// }, [])

	return (
		<div
			ref={alert}
			className="absolute top-16 left-1/2 -translate-x-1/2  bg-slate-100 text-black rounded-lg disappear text-center text-2xl font-semibold px-6 py-2"
		>
			{alertText}
		</div>
	);
}

export default Alert;
