import React from 'react';
import ReactDOM from 'react-dom';

class Feed extends React.Component {
		render() {
			return (
				<div>
					<div class="fb-status-update-entry panel panel-default"></div>
				</div>
			);
		}
}

ReactDOM.render(
	<Feed />,
	document.getElementById('fb-feed')
)
