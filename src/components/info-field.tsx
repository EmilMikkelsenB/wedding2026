import React from "react";
import styled from "styled-components";



const InfoField: React.FC = () => {

	return (
		<RsvpSectionStyle>
			<SubHeaderStyle>
				Ett barnfritt bröllop
			</SubHeaderStyle>
			<RsvpFieldStyle>
				Vi tycker mycket om era små, men den här dagen vill vi fira med er vuxna.
			</RsvpFieldStyle>
			<Divider />
			<SubHeaderStyle>
				Hålla tal? Uppträda?
			</SubHeaderStyle>
			<RsvpFieldStyle>
				Hör av er till våra eminenta toastmasters Clara Dahlgren och Jakob Nilsson Unenge!
			</RsvpFieldStyle>
			<RsvpFieldStyle>
				toastelseochadrian@gmail.com
			</RsvpFieldStyle>

		</RsvpSectionStyle>
	)
};

const RsvpSectionStyle = styled.div`
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
	text-align: center;
	box-sizing: border-box;

	@media (max-width: 768px) {
		height: 500px;
		padding: 2rem 1.5rem;
	}
`;

const SubHeaderStyle = styled.div`
	font-size: clamp(1.25rem, 4vw, 1.75rem);
	color: #333;
	font-family: 'Cavilenny', sans-serif;
	font-weight: 600;
	margin-bottom: 1rem;
	line-height: 1.4;
`;

const RsvpFieldStyle = styled.div`
	font-size: clamp(1.5rem, 2vw, 1.15rem);
	color: #333;
	font-family: 'Cavilenny', sans-serif;
	width: 100%;
	margin-bottom: 1.5rem;
	line-height: 1.6;
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

export default InfoField;
