import React from "react";
import styled from "styled-components";

const RSVPField: React.FC = () => {
	return (
		<RsvpSectionStyle>
			<IframeContainer>
				<StyledIframe
					src="https://docs.google.com/forms/d/e/1FAIpQLSerPgPg6SLW3_oIwgoxulpjC6Q67NZhP_CmfbWiDP7ktVM_3g/viewform?embedded=true"
					title="RSVP Form"
				>
					Loading…
				</StyledIframe>
			</IframeContainer>
		</RsvpSectionStyle>
	)
};

const RsvpSectionStyle = styled.div`
	color: #333;
	font-family: 'Cavilenny', sans-serif;
	flex-direction: column;
	display: flex;
	align-items: center;
	flex: 1;
	max-width: 600px;
	width: 100%;

	@media (max-width: 700px) {
		max-width: 100%;
	}
`;

const IframeContainer = styled.div`
	width: 100%;
	height: 600px;
	overflow: hidden;
	border-radius: 4px;
	border: 2px solid #333;
	box-sizing: border-box;

	@media (max-width: 768px) {
		height: 500px;
	}
`;

const StyledIframe = styled.iframe`
	width: 100%;
	height: 100%;
	border: none;
	background: transparent;
	overflow: hidden;
`;
export default RSVPField;
