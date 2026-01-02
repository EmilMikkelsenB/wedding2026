import React from 'react';
import styled from 'styled-components';
import Map from './map';
const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <InfoContainer>
                <Map />
                <InfoSection>
                    <FooterTitle>Else & Adrian</FooterTitle>
                    <FooterDate>6 juni 2026</FooterDate>
                    <FooterDivider />
                    <ContactInfo>
                        <ContactItem>
                            <Label>Kontakt:</Label>
                            <Text>elseochadrian@gmail.com</Text>
                        </ContactItem>
                    </ContactInfo>
                </InfoSection>
            </InfoContainer>
        </FooterWrapper>

    );
};

const FooterWrapper = styled.div`
    width: 100%;
    height: 35vh;
    background: #c4b5a8ff;
    padding: 20px;

    @media (max-width: 600px) {
        height: auto;
        min-height: 400px;
        padding: 20px 0;
    }
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 80%;
    margin: 0 10% 0 10%;
    color: #333;
    font-family: 'Cavilenny', sans-serif;
    font-size: 1.5vw;
    @media (max-width: 600px) {
        font-size: 3vw;
        padding: 0 1rem;
        text-align: center;
        flex-direction: column;
        gap: 1rem;
    }
`;

const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: 45%;

    @media (max-width: 600px) {
        width: 100%;
        align-items: center;
        margin-top: 0;
    }
`;

const FooterTitle = styled.h3`
    font-size: 2.5vw;
    color: #333;
	font-family: 'Bequta', sans-serif;
    margin: 0;
    font-weight: light;

    @media (max-width: 600px) {
        font-size: 6vw;
    }
`;

const FooterDate = styled.div`
    font-size: 1.5vw;
    color: #333;
    font-family: 'Cavilenny', sans-serif;
    margin: 0;

    @media (max-width: 600px) {
        font-size: 4vw;
    }
`;

const FooterDivider = styled.div`
    width: 100%;
    height: 1px;
    background: rgba(51, 51, 51, 0.2);
    margin: 0.5rem 0;
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
`;

const ContactItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: baseline;

    @media (max-width: 600px) {
        flex-direction: row;
        gap: 0.5rem;
        align-items: baseline;
        justify-content: center;
    }
`;

const Label = styled.span`
    font-weight: 600;
    color: #333;
`;

const Text = styled.span`
    color: #333;
`;

export default Footer;
