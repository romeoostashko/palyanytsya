import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      global: {bg: string};
      post: {bg: string; grayText: string};
      tag: {bg: string};
    };
  }
}
