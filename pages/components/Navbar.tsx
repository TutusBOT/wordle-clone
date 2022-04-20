import React, { Dispatch, SetStateAction } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { mode } from "./mode";

interface Navbar {
	darkmode: boolean;
	setDarkmode: Dispatch<SetStateAction<boolean>>;
}

function Navbar({ darkmode, setDarkmode }: Navbar) {
	return (
		<nav
			className={
				"grid grid-cols-3 items-center w-full text-center text-white border-b border-gray-800 py-2 text-3xl h-14 "
			}
		>
			<h1 className="col-start-2">Wordle</h1>
			<div className="justify-self-end">
				<div
					className="cursor-pointer"
					onClick={() => {
						setDarkmode(!darkmode);
					}}
				>
					{darkmode ? <MdDarkMode /> : <MdLightMode />}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
