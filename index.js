import React from 'react';
import { render } from 'react-dom';
//import Media from './src/playlist/components/media';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';

//console.log('Hola Mundo')

const app = document.getElementById('app');
//const holaMundo = <h1>Hola Mundo!</h1>;

render(<Playlist data={data} />,app)