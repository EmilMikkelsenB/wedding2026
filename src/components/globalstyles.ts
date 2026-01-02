import { createGlobalStyle } from "styled-components";
import BequtaFont from "../assets/fonts/Bequta-1j5pv.otf";
import CavilennyFont from "../assets/fonts/CavilennyRegular-7OvVl.otf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Bequta';
    src: url(${BequtaFont}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
	@font-face {
    font-family: 'Cavilenny';
    src: url(${CavilennyFont}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Bequta', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  html {
    overflow-x: hidden;
  }
	.leaflet-container {
    height: 100%;
    width: 100%;
  }
`;
