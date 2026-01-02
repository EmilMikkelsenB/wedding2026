import React from 'react';
import styled from 'styled-components';

interface TimelineEvent {
	time: string;
	title: string;
	description?: string;
}

const timelineEvents: TimelineEvent[] = [
	{ time: "14:30", title: "Ceremoni", description: "Vigsel i Gamla Uppsala Kyrka" },
	{ time: "13:00", title: "Ceremoni", description: "Vigsel i trädgården." },
	{ time: "14:00", title: "Lunch", description: "Buffé och dryck." },
	{ time: "16:00", title: "Lekar", description: "Roliga aktiviteter för alla." },
	{ time: "18:00", title: "Middag", description: "Festmåltid och tal." },
	{ time: "20:00", title: "Dans", description: "Dans och musik." },
	{ time: "22:00", title: "Barnröring", description: "Aktiviteter för barnen." },
	{ time: "23:00", title: "Avslutning", description: "Tack för idag!" },
];

const Timeline: React.FC = () => (
	<TimelineContainer>
		<TimelineHeaderStyle>Dagsordning</TimelineHeaderStyle>
		{timelineEvents.map((event, idx) => (
			<TimelineFieldStyle key={idx}>
				<TimelineTextStyle>
					<strong>{event.time}</strong> {event.title}
					{event.description && (
						<TimelineSubTextStyle>{event.description}</TimelineSubTextStyle>
					)}
				</TimelineTextStyle>
			</TimelineFieldStyle>
		))}
	</TimelineContainer>
);
const TimelineContainer = styled.div`
	padding: 1.5rem;
	color: #333;
	font-family: 'Cavilenny', sans-serif;
	flex-direction: column;
	display: flex;
	align-items: center;
	position: relative;
	flex: 1;
	max-width: 600px;
	width: 100%;

	@media (max-width: 700px) {
		max-width: 100%;
	}
`;

const TimelineHeaderStyle = styled.div`
	font-size: 3vw;
	color: #333;
	font-family: 'Cavilenny', sans-serif;
	margin-bottom: 2rem;
	display: flex;
	background: #FFEDDD;
	z-index: 1;
	padding: 0 1rem;
	@media (max-width: 600px) {
		font-size: 7vw;
	}
`;

const TimelineFieldStyle = styled.div`
	margin-bottom: 3vh;
	width: 100%;
	&::after {
		content: "";
		position: absolute;
		left: 50%;
		top: 0;
		width: 2px;
		height: 100%;
		background: #333;
		z-index: 0;
	}
`;

const TimelineTextStyle = styled.div`
	font-size: 1.5vw;
	color: #333;
	font-family: 'Cavilenny', sans-serif;
	background: #FFEDDD;
	width: 100%;
	position: relative;
	text-align: center;
	z-index: 2;
	@media (max-width: 600px) {
		font-size: 4vw;
	}
`;

const TimelineSubTextStyle = styled.div`
	font-size: 1vw;
	color: #333;
	font-family: 'Cavilenny', sans-serif;
	width: 100%;
	position: relative;
	text-align: center;
	z-index: 2;
	@media (max-width: 600px) {
		font-size: 3.5vw;
	}
`;
export default Timeline;