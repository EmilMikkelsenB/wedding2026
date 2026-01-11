import React from 'react';
import styled from 'styled-components';
import RsvpField from './rsvp-field';
import Footer from './footer';
import InfoField from './info-field';
import Hero from './hero';
import Imagediv from './imagediv';
import MoreInfoField from './more-info';

const LandingPage: React.FC = () => {
	return (
		<>
			<BackgroundStyle>
				<HeaderStyle>Else & Adrian</HeaderStyle>
				<HeaderNumStyle>06-06-2026</HeaderNumStyle>
				<GridContainer>
					<Imagediv />
					<Hero />
					<RsvpField />
					<InfoField />
					<MoreInfoField />
				</GridContainer>
			</BackgroundStyle>
			<Footer />
		</>
	);
};

const BackgroundStyle = styled.div`
	background-color: #FFEDDD;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	margin: 0;
	padding-top: 100px;

	@media (max-width: 768px) {
		padding-top: 80px;
	}

	@media (max-width: 480px) {
		padding-top: 60px;
	}
`;

const HeaderStyle = styled.div`
	font-size: 7vw;
	color: #333;
	font-family: 'Bequta', sans-serif;
	font-weight: light;
	margin-top: 2vh;
	text-align: center;
	width: 100%;
	@media (max-width: 600px) {
		font-size: 15vw;
	}
`;

const HeaderNumStyle = styled.div`
	font-size: 3.5vw;
	color: #333;
	font-family: 'Cavilenny', sans-serif;
	text-align: center;
	width: 100%;
	@media (max-width: 600px) {
		font-size: 6vw;
	}
`;

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 600px));
	gap: 3rem;
	width: 100%;
	max-width: 1240px;
	padding: 0 40px;
	margin: 3% 0 5% 0;
	justify-content: center;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 2rem;
		padding: 0 30px;
		max-width: 600px;
	}

	@media (max-width: 480px) {
		padding: 0 20px;
	}
`;





export default LandingPage;