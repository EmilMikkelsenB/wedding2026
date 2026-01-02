import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Navbar: React.FC = () => {
	const location = useLocation();

	return (
		<NavContainer>
			<NavPill>
				<NavLinks>
					<NavLink to="/" $isActive={location.pathname === '/'}>
						Hem
					</NavLink>
					<NavDivider />

					<NavLink to="/transport" $isActive={location.pathname === '/transport'}>
						Transport
					</NavLink>
					<NavDivider />

					<NavLink to="/boende" $isActive={location.pathname === '/boende'}>
						Boende
					</NavLink>
					<NavDivider />

					<NavLink to="https://docs.google.com/forms/d/e/1FAIpQLSerPgPg6SLW3_oIwgoxulpjC6Q67NZhP_CmfbWiDP7ktVM_3g/viewform?embedded=true">
						O.S.A
					</NavLink>

				</NavLinks>
			</NavPill>
		</NavContainer>
	);
};

const NavContainer = styled.nav`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.5rem 0;
	pointer-events: none;
	@media (max-width: 768px) {
		padding: 1rem 0;
	}

	@media (max-width: 480px) {
		padding: 0.75rem 0;
	}
`;

const NavPill = styled.div`
	background: rgba(196, 181, 168, 0.75);
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
	border-radius: 50px;
	padding: 0.5rem 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
				0 2px 8px rgba(0, 0, 0, 0.05),
				inset 0 1px 0 rgba(255, 255, 255, 0.3);
	border: 1px solid rgba(255, 255, 255, 0.2);
	pointer-events: auto;
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15),
					0 4px 12px rgba(0, 0, 0, 0.08),
					inset 0 1px 0 rgba(255, 255, 255, 0.3);
	}

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		border-radius: 25px;
	}

	@media (max-width: 480px) {
		padding: 0.5rem 0.75rem;
		gap: 0.4rem;
	}
`;

const NavDivider = styled.div`
	width: 1px;
	height: 24px;
	background: linear-gradient(to bottom,
		transparent,
		rgba(51, 51, 51, 0.2) 20%,
		rgba(51, 51, 51, 0.2) 80%,
		transparent
	);

	@media (max-width: 768px) {
		width: 50%;
		height: 1px;
		background: linear-gradient(to right,
			transparent,
			rgba(51, 51, 51, 0.2) 20%,
			rgba(51, 51, 51, 0.2) 80%,
			transparent
		);
	}
`;

const NavLinks = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;

	@media (max-width: 768px) {
		gap: 0.5rem;
		width: 100%;
		justify-content: center;
	}

	@media (max-width: 480px) {
		gap: 0.4rem;
	}
`;

const NavLink = styled(Link) <{ $isActive: boolean }>`
	font-size: 0.95rem;
	color: #333;
	font-family: 'Cavilenny', sans-serif;
	text-decoration: none;
	padding: 0.4rem 1rem;
	border-radius: 20px;
	transition: all 0.3s ease;
	background-color: ${props => props.$isActive ? 'rgba(255, 237, 221, 0.8)' : 'transparent'};
	font-weight: ${props => props.$isActive ? '600' : 'normal'};
	white-space: nowrap;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	&:hover {
		color: #333;
		background-color: rgba(255, 237, 221, 0.6);
		transform: translateY(-1px);
	}

	&:active {
		transform: translateY(0);
	}

	@media (max-width: 768px) {
		font-size: 0.9rem;
		padding: 0.35rem 0.85rem;
	}

	@media (max-width: 480px) {
		font-size: 0.85rem;
		padding: 0.3rem 0.7rem;
	}
`;

export default Navbar;
