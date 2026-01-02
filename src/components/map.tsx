import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";

export default function Map() {
    return (
        <MapWrapper>
            <MapContainer center={[59.899640, 17.630741]} zoom={11} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[59.899640, 17.630741]}>
                    <Popup>
                        Gamla Uppsala Kyrka
                    </Popup>
                </Marker>
                <Marker position={[59.857414, 17.637937]}>
                    <Popup>
                        Norrlands Nation
                    </Popup>
                </Marker>
            </MapContainer>
        </MapWrapper >
    );
}

const MapWrapper = styled.div`
    width: 50%;
    height: 100%;
     @media (max-width: 600px) {
        width: 100%;
        height: 300px;
        min-height: 300px;
    }
`;
