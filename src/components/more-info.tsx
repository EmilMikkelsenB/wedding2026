import React from "react";
import styled from "styled-components";

const MoreInfoField: React.FC = () => {
	return (
		<RsvpSectionStyle>
			<RsvpFieldStyle>
				Det allra viktigaste för oss är att få fira vår dag tillsammans med er.
				Om ni ändå vill ge en gåva finns en önskelista – och annars blir vi
				väldigt glada för ett bidrag till vår bröllopsresa.
			</RsvpFieldStyle>
			<Divider />
			<RsvpFieldStyle>
				Önskelista: <a href="https://presentlistan.nu/90130E/">https://presentlistan.nu/90130E/</a>
			</RsvpFieldStyle>
			<Divider />
			<RsvpFieldStyle>
				Bröllopsresa: Swish Renée Båge, +46706432881 (märk Bröllopsresa)
			</RsvpFieldStyle>
		</RsvpSectionStyle>
	);
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
	border: 2px solid #333;S
	border-radius: 4px;
	text-align: center;
	box-sizing: border-box;

	@media (max-width: 768px) {
		height: 500px;
		padding: 2rem 1.5rem;
	}
`;

const RsvpFieldStyle = styled.div`
  font-size: clamp(1.5rem, 2vw, 1.15rem);
  color: #333;
  font-family: "Cavilenny", sans-serif;
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

export default MoreInfoField;
