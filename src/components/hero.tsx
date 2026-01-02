import styled from 'styled-components';

const Hero = () => {
	return (
		<ContainerDiv>
			<MainText>Lördag 6 juni 2026 gifter vi oss!</MainText>
			<Divider />
			<InfoText>
				<strong>Vigsel:</strong> Gamla Uppsala Kyrka 14.30
			</InfoText>
			<InfoText>
				<strong>Middag & fest:</strong> Norrlands nation från 16.30
			</InfoText>
			<Divider />
			<InfoText>
				<strong>O.S.A senast:</strong> 6/3 2026
			</InfoText>
			<InfoText>
				<strong>Klädkod:</strong> Kavaj
			</InfoText>
		</ContainerDiv>
	)
}

const ContainerDiv = styled.div`
	padding: 2.5rem 2rem;
	color: #333;
	font-family: 'Cavilenny', sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 600px;
	border: 2px solid #333;
	border-radius: 4px;
	box-sizing: border-box;

	@media (max-width: 768px) {
		height: 500px;
		padding: 2rem 1.5rem;
	}
`;

const MainText = styled.div`
	font-size: clamp(1.25rem, 3vw, 1.75rem);
	color: #333;
	font-family: 'Cavilenny', sans-serif;
	text-align: center;
	font-weight: 600;
	margin-bottom: 1.5rem;
	line-height: 1.4;
`;

const InfoText = styled.div`
	font-size: clamp(1rem, 2vw, 1.15rem);
	color: #333;
	font-family: 'Cavilenny', sans-serif;
	text-align: center;
	margin: 0.5rem 0;
	line-height: 1.6;

	strong {
		font-weight: 600;
		margin-right: 0.25rem;
	}
`;

const Divider = styled.hr`
	width: 60%;
	border: none;
	border-top: 1px solid #ccc;
	margin: 1.25rem 0;

	@media (max-width: 480px) {
		width: 80%;
		margin: 1rem 0;
	}
`;

export default Hero