import React, { Fragment } from 'react';
import { Grid, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const UserDetailedSidebar = ({ isCurrentUser }) => {
	return (
		<Fragment>
			<Grid.Column width={4}>
				<Segment>
					{isCurrentUser ? (
						<Button
							as={Link}
							to='/settings'
							color='teal'
							fluid
							basic
							content='Edit Profile'
						/>
					) : (
						<Button color='teal' fluid basic content='Follow User' />
					)}
				</Segment>
			</Grid.Column>
		</Fragment>
	);
};

export default UserDetailedSidebar;
