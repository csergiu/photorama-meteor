import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

import MainLayout from '../ui/MainLayout.jsx';
import { Homepage } from '../ui/Views/Homepage.jsx';
import { Register } from '../ui/Views/Register.jsx';
import { Dashboard } from '../ui/Views/Dashboard.jsx';
import { People } from '../ui/Views/People.jsx';
import { Messages } from '../ui/Views/Messages.jsx';
import { Photos } from '../ui/Views/Photos.jsx';
import { Upload } from '../ui/Views/Upload.jsx';

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

// Upload
authenticatedRoutes.route('/upload', {
  name: 'upload',
  action() {
    mount(MainLayout, {
      content: (props) => <Upload {...props} />
    })
  }
});

// People
authenticatedRoutes.route('/people', {
  name: 'people',
  action() {
    mount(MainLayout, {
      content: (props) => <People {...props} />
    })
  }
});

// Messages
authenticatedRoutes.route('/messages', {
  name: 'messages',
  action() {
    mount(MainLayout, {
      content: (props) => <Messages {...props} />
    })
  }
});

// Photos
authenticatedRoutes.route('/photos', {
  name: 'photos',
  name: 'photos',
  action() {
    mount(MainLayout, {
      content: (props) => <Photos {...props} />
    })
  }
});

