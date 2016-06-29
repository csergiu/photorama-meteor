import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

import MainLayout from '../ui/MainLayout.jsx';
import { Homepage } from '../ui/Views/Homepage.jsx';
import { Register } from '../ui/Views/Register.jsx';
import PeopleContainer, { People } from '../ui/Views/People.jsx';
import { Messages } from '../ui/Views/Messages.jsx';
import { Photos } from '../ui/Views/Photos.jsx';
import { Photo } from '../ui/Views/Photo.jsx';
import { Upload } from '../ui/Views/Upload.jsx';
import { Profile } from '../ui/Views/Profile.jsx';

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

// Photos
authenticatedRoutes.route('/photos', {
  name: 'photos',
  action() {
    mount(MainLayout, {
      content: (props) => <Photos {...props} />
    })
  }
});

// Photo
authenticatedRoutes.route('/photo/:photoId', {
  name: 'photo',
  action(params) {
    mount(MainLayout, {
      content: (props) => <Photo photoId={params.photoId} {...props} />
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
      content: (props) => <PeopleContainer {...props} />
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

// Messages
authenticatedRoutes.route('/profile/:userId', {
  name: 'profile',
  action(params) {
    mount(MainLayout, {
      content: (props) => <Profile userId={params.userId} {...props} />
    })
  }
});

