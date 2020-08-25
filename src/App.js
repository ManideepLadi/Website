import React from 'react';
import './App.css';

const styling={
  backgroundStyle : {
    background: 'no-repeat center right fixed url(manideepSketch.jpeg)',
    marginBottom: 0,
    padding: 0
  },
  container :{
    position: 'relative',
    top: '28%',
    zIndex: 4,
    textAlign: 'center'
  },
  // overlay : {
  //     background-color: deepskyblue;position: absolute;top: 0;bottom: 0;left: 0;right: 0;opacity: 0.75;filter:alpha(opacity=75);z-index: 2;
  // }
};

function App() {
  return (
      <div id="top" style={styling.backgroundStyle} data-src="/view/images/tower_scope_animation.gif" data-position="center right">
        <div style={styling.container}>
          <h1>Manideep Ladi</h1>
          <p>Interactive resume</p>
        </div>

        {/*<div className="overlay"></div>*/}
      </div>

  );
}

export default App;
