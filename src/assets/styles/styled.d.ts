// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    pointColor: string;
    assistanceColor: string;
    dominantColor: string;
    negativePointColor: string;
    negativeAssistanceColor: string;
    negativeDominantColor: string;
    bgColor1: string;
    bgColor2: string;
    txtColor: string;
    borderColor: string;
    grayColor: string;
  }
}
