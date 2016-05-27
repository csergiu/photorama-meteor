import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

import MainLayout from '../ui/MainLayout.jsx';
import { Homepage } from '../ui/Views/Homepage.jsx';
import { Register } from '../ui/Views/Register.jsx';
import { Dashboard } from '../ui/Views/Dashboard.jsx';

const publicRoutes = FlowRouter.group({ name: 'public' });
const authenticatedRoutes = FlowRouter.group( { name: 'authenticated' } );

// Homepage
publicRoutes.route('/', {
  name: 'homepage',
  action() {
    mount(MainLayout, {
      content: (props) => <Homepage {...props} />
    })
  }
});

// Sign up page
publicRoutes.route('/register', {
  name: 'register',
  action() {
    mount(MainLayout, {
      content: (props) => <Register {...props} />
    })
  }
});

// Dashboard
authenticatedRoutes.route('/dashboard', {
  name: 'dashboard',
  action() {
    mount(MainLayout, {
      content: (props) => <Dashboard {...props} />
    })
  }
});