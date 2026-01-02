import styled from 'styled-components';
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
const Imagediv = () => {
    return (
        <ContainerDiv>
            <ImageDiv src={image1} />
        </ContainerDiv>
    )
}

const ContainerDiv = styled.div`
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
	overflow: hidden;
	box-sizing: border-box;

	@media (max-width: 768px) {
		height: 500px;
	}
`;
const ImageDiv = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;



export default Imagediv;