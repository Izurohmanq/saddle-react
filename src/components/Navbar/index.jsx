import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import LogoSaddle from "../../assets/images/Group 5.png";
function SNavbar() {

	const navigate = useNavigate()
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};
	return (
		<nav className="navbar bg-white border-b-4 border-black fixed top-0 left-0 right-0 z-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<img className="h-12 w-27" src={LogoSaddle} alt="Logo" />
						</div>
					</div>
					<div className="hidden md:block">
						<div className="ml-4 flex items-center">
							<Link
								to='/'
								className="px-3 py-2 rounded-md text-md font-medium text-black hover:bg-slate-300"
							>
								Home
							
							</Link>
							<Link
								to='/product'
								className="px-3 py-2 rounded-md text-md font-medium text-black hover:bg-slate-300"
							>
								Product
							
							</Link>
							<Link
								to='/customerphotos'
								className="px-3 py-2 rounded-md text-md font-medium text-black hover:bg-slate-300"
							>
								Photo
							
							</Link>
						</div>
					</div>
					<div className="-mr-2 flex md:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-slate-300 focus:outline-none focus:bg-gray-700 focus:text-black"
							aria-controls="mobile-menu"
							aria-expanded={isMenuOpen}
						>
							<span className="sr-only">Open main menu</span>
							{!isMenuOpen ? (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							) : (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>
			{isMenuOpen && (
				<div className="md:hidden" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<Link
							to="/"
							className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-slate-300"
						>
							Home
						</Link>
						<Link
							to="/product"
							className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-slate-300"
						>
							Product
						</Link>
						<Link
							to="/customerphotos"
							className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-slate-300"
						>
							Photo
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}

export default SNavbar;
