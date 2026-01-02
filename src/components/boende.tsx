import React from 'react';
import styled from 'styled-components';
import gaNorrlandsImage from '../assets/gaNorrlands.webp';

const Boende: React.FC = () => {

	const link = <LinkContent href='https://www.grandhotellhornan.com'>Grand Hotel Hörnan</LinkContent>

	return (
		<BackgroundStyle>
			<HeaderStyle>Boende</HeaderStyle>
			<GridContainer>
				<ImageBox>
					<StyledImage src={gaNorrlandsImage} alt="Norrlands Nation Map" />
				</ImageBox>
				<ContentBox>
					<TextContent>
						Bröllopsfesten är på Norrlands nation, som ligger mitt i centrala Uppsala. Det finns massor av hotell på gång- och rullavstånd. Bokar ni {link} får ni 10% rabatt med koden Wedding2026, som ni kan använda både om ni bokar på hemsidan eller via e-post.
					</TextContent>
				</ContentBox>
			</GridContainer>
		</BackgroundStyle>
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
	margin: 2vh 0;
	text-align: center;
	width: 100%;

	@media (max-width: 600px) {
		font-size: 15vw;
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

const ImageBox = styled.div`
	width: 100%;
	height: 600px;
	border: 2px solid #333;
	border-radius: 4px;
	overflow: hidden;
	box-sizing: border-box;

	@media (max-width: 768px) {
		height: 500px;
	}
`;

const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const ContentBox = styled.div`
	padding: 2rem 1.75rem;
	color: #333;
	font-family: 'Cavilenny', sans-serif;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	height: 600px;
	border: 2px solid #333;
	border-radius: 4px;
	box-sizing: border-box;

	@media (max-width: 768px) {
		height: auto;
		min-height: 300px;
		padding: 2rem 1.5rem;
	}
`;

const TextContent = styled.p`
	font-size: clamp(1.1rem, 1.6vw, 1.05rem);
	color: #333;
	font-family: 'Cavilenny', sans-serif;
	line-height: 1.4;
	margin: 0 0 0.6rem 0;

	&:last-child {
		margin-bottom: 0;
	}
`;

const LinkContent = styled.a`
	font-size: inherit;
	color: #333;
	font-family: 'Cavilenny', sans-serif;
	line-height: inherit;
	text-decoration: underline;
`;

export default Boende;
