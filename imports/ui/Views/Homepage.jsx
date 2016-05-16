import React from 'react';
import {
  Jumbotron
} from 'react-bootstrap';

export const Homepage = () => (
  <Jumbotron className="hero-section">
    <div className="main-title">
      <div className="col-md-7 col-md-offset-1">
        <h1>All your photos in one place.</h1>
        <h3>Upload, organize and share your photos professionally.</h3>
      </div>
    </div>
  </Jumbotron>
);