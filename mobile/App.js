import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';


import Routes from './src/routes';

export default function App() {
  return (
    <Routes/>
  );
}


// Tds os elementos no react-native são display flex
// Não existe herança de estilos no react-native, o estilo é dado por componente ou por elemento 
