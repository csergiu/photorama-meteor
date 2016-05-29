import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';

import '../imports/startup/routes.jsx';

// route change listener needed for sidebar
let currentRoute = (route) => {
	FlowRouter.watchPathChange();
	return FlowRouter.current().route.name === route ? 'active' : '';
}

FlowHelpers = {
	currentRoute: currentRoute
};
