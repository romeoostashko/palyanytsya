import {DefaultTheme} from 'styled-components';

export const darkTheme: DefaultTheme = {
  background: '#121212',

  colors: {global: {bg: '#121212'}, post: {bg: '#afc7dd', grayText: '#3f3733'}},
};

export const lightTheme: DefaultTheme = {
  background: '#e4edf5',
  colors: {
    global: {bg: '#e4edf5'},
    post: {bg: '#afc7dd', grayText: '#3f3733'},
    tag: {bg: '#e8df73'},
  },
};
