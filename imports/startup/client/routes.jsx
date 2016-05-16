import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

import { MainLayout } from '../../ui/MainLayout.jsx';
import { Homepage } from '../../ui/Views/Homepage.jsx';

FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(MainLayout, {
      content: <Homepage />
    })
  }
});