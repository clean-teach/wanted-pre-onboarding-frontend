import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: ${(props) => props.theme.bgColor2};
  color: ${(props) => props.theme.txtColor};
  line-height: 1.2;
  padding-top: 4rem;
}
a {
  text-decoration:none;
  color:${(props) => props.theme.pointColor};
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
}
button {
  cursor: pointer;
  border: none;
  background: ${(props) => props.theme.pointColor};
  color: ${(props) => props.theme.bgColor1};
  border-radius:0.25rem ;
  &:disabled {
    cursor: default;
    background: ${(props) => props.theme.grayColor};
  }
  &.secondary {
    border: 1px solid ${(props) => props.theme.grayColor};
    background: none;
    color: ${(props) => props.theme.txtColor};
  }
  &.delete {
    background: ${(props) => props.theme.negativePointColor};
    color: ${(props) => props.theme.bgColor1};
  }
}
input[type='text'], input[type='password'], input[type='email'], textarea {
  width: 100%;
  font-size: 1rem;
  padding: 1rem;
  border-radius: .25rem;
  border: 1px solid ${(props) => props.theme.grayColor};
  &.warning {
    border-color: ${(props) => props.theme.negativeAssistanceColor};
    outline-color: ${(props) => props.theme.assistanceColor};
    border-width: .125rem;
    &:focus {
      border-color: #333333;
      background-color: #ffffff;
    }
  }
  &.success {
    border-color: ${(props) => props.theme.assistanceColor};
    outline-color: ${(props) => props.theme.assistanceColor};
    border-width: .125rem;
    /* background-color: ${(props) => props.theme.dominantColor}; */
  }
}
input[type='checkbox'], input[type='radio'] {
  cursor: pointer;
}
p.warning {
  color: ${(props) => props.theme.negativePointColor};
}
`;

export const AuthArea = styled.div`
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgColor1};
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  form {
    width: 560px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    button {
      font-size: 1rem;
      padding: 1rem;
      margin-top: 1rem;
    }
    .input-area {
      position: relative;
      padding-top: 0.5rem;
    }
    label {
      position: absolute;
      top: 0;
      left: 1rem;
      padding: 0 0.5rem;
      transform: scaley(0);
      transition: 0.2s;
      font-weight: bold;
      background-color: ${(props) => props.theme.bgColor1};
    }
    input:focus {
      & + label {
        transform: scaley(1);
      }
    }
  }
  .link-area {
    margin-top: 1rem;
    border-top: 1px solid #eaeaea;
    padding-top: 1rem;
    width: 560px;
    text-align: center;
  }
`;

export const Box = styled.div`
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.bgColor1};
`;
