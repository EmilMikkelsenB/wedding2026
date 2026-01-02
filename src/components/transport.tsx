import React from 'react';
import styled from 'styled-components';
import gaUppsalaImage from '../assets/gaUppsala.webp';

const Transport: React.FC = () => {
	return (
		<BackgroundStyle>
			<HeaderStyle>Transport</HeaderStyle>
			<GridContainer>
				<ImageBox>
					<StyledImage src={gaUppsalaImage} alt="Gamla Uppsala Map" />
				</ImageBox>
				<ContentBox>
					<SubSectionTitle>Buss</SubSectionTitle>
					<TextContent>
						För att ta er till Gamla Uppsala kyrka går buss nr 2 från Dragarbrunn till hållplats Kungshögarna. Det tar drygt 20 minuter, därefter är det en kort promenad upp till kyrkan.
					</TextContent>
					<TextContent>
						Ta sedan samma buss tillbaka till stan, närmaste hållplatsen till Norrlands nation är Dragarbrunn.
					</TextContent>
					<TextContent>
						Biljett kan ni köpa antingen i UL-appen eller med kort på bussen.
					</TextContent>
					<Divider />
					<SubSectionTitle>Taxi</SubSectionTitle>
					<TextContent>
						Givetvis går det jättebra att ta taxi ut. Uppsala Taxi nås på 018-100 000
					</TextContent>
					<Divider />
					<SubSectionTitle>Parkering</SubSectionTitle>
					<TextContent>
						Bra att veta är att det pågår ett nationaldagsfirande på Disagården bredvid kyrkan, så det kan vara dåligt med parkeringsplatser.				</TextContent>
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

const SubSectionTitle = styled.h2`
	font-size: clamp(1.1rem, 2.2vw, 1.5rem);
	color: #333;
	font-family: 'Cavilenny', sans-serif;
	font-weight: 600;
	margin: 0 0 0.5rem 0;

	&:first-child {
		margin-top: 0;
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

const Divider = styled.hr`
	width: 80%;
	border: none;
	border-top: 1px solid #ccc;
	margin: 1rem 0;
	align-self: center;
`;

export default Transport;
