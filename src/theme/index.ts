import {DefaultTheme} from 'styled-components';

export const darkTheme: DefaultTheme = {
  background: '#141c27',

  colors: {
    global: {bg: '#575967'},
    post: {bg: '#283544', grayText: '#ddd', color: '#fbfbfb'},
    tag: {bg: '#e8df73'},
    mainHeader: {bg: '#283544'},
  },
};

export const lightTheme: DefaultTheme = {
  background: '#e4edf5',
  colors: {
    global: {bg: '#e4edf5'},
    post: {bg: '#afc7dd', grayText: '#3f3733', color: '#fbfbfb'},
    tag: {bg: '#e8df73'},
    mainHeader: {bg: '#283544'},
  },
};
