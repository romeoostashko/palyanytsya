import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      global: {bg: string};
      post: {bg: string; grayText: string; color: string};
      tag: {bg: string};
      mainHeader: {bg: string};
    };
    background: string;
  }
}
