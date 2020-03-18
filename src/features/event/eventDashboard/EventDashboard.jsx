import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import EventList from '../EventList/EventList';
import { createEvent, updateEvent } from '../eventActions';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import EventActivity from '../EventActivity/EventActivity';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';

class EventDashboard extends Component {
	handleDeleteEvent = id => {
		this.props.deleteEvent(id);
	};

	render() {
		const { events } = this.props;
		if (!isLoaded(events)) return <LoadingComponent />;

		return (
			<div>
				<Grid>
					<Grid.Column width={10}>
						<EventList events={events} deleteEvent={this.handleDeleteEvent} />
					</Grid.Column>
					<Grid.Column width={6}>
						<EventActivity />
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	events: state.firestore.ordered.events
});

const actions = {
	createEvent,
	updateEvent
};

export default connect(
	mapStateToProps,
	actions
)(firestoreConnect([{ collection: 'events' }])(EventDashboard));
