import React from 'react';
import ReactDOM from 'react-dom';

import jpg from './original.jpg?quality=50&w=200';
import jpgDupe from './original.jpg?quality=50&w=200';
import jpgLarge from './original.jpg?quality=80&w=500';
import jpgInline from './original.jpg?quality=80&w=500';
import gif from './original.gif?h=20';
import png from './original.png?w=200';
import svg from './original.svg';
import svgInline from './original.svg?inline';
import skip from './original.jpg?skip';

const App = () => (
  <div>
    <img src={jpg} />
    {/* jpgDupe should have same filename as jpg */}
    <img src={jpgDupe} />
    <div style={{ backgroundImage: jpgInline, height: 200, width: 500 }} />
    <img src={jpgLarge} />
    <img src={gif} />
    <img src={png} />
    <img src={svg} />
    <div dangerouslySetInnerHtml={{ __html: svgInline }} />
    <img src={skip} />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#app'));
