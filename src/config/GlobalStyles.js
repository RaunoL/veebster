import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

body{
    box-sizing: border-box;
    margin: 0;
    overflow-x: hidden;
}
h1, h2, h3, h4, h5, h6{
    font-family : "${props=> props.theme.typography.fontFamily}";
    margin: 0;
}
h1{
    font-weight : ${props=> props.theme.typography.h1.fontWeight};
    font-size : ${props=> props.theme.typography.h1.fontSize};
    line-height : ${props=> props.theme.typography.h1.lineHeight};
    letter-spacing : ${props=> props.theme.typography.h1.letterSpacing};
}
h2{
    font-weight : ${props=> props.theme.typography.h2.fontWeight};
    font-size : ${props=> props.theme.typography.h2.fontSize};
    line-height : ${props=> props.theme.typography.h2.lineHeight};
    letter-spacing : ${props=> props.theme.typography.h2.letterSpacing};
}
h3{
    font-weight : ${props=> props.theme.typography.h3.fontWeight};
    font-size : ${props=> props.theme.typography.h3.fontSize};
    line-height : ${props=> props.theme.typography.h3.lineHeight};
    letter-spacing : ${props=> props.theme.typography.h3.letterSpacing};
}
h4{
    font-weight : ${props=> props.theme.typography.h4.fontWeight};
    font-size : ${props=> props.theme.typography.h4.fontSize};
    line-height : ${props=> props.theme.typography.h4.lineHeight};
    letter-spacing : ${props=> props.theme.typography.h4.letterSpacing};
}
h5{
    font-weight : ${props=> props.theme.typography.h5.fontWeight};
    font-size : ${props=> props.theme.typography.h5.fontSize};
    line-height : ${props=> props.theme.typography.h5.lineHeight};
    letter-spacing : ${props=> props.theme.typography.h5.letterSpacing};
}
h6{
    font-weight : ${props=> props.theme.typography.h6.fontWeight};
    font-size : ${props=> props.theme.typography.h6.fontSize};
    line-height : ${props=> props.theme.typography.h6.lineHeight};
    letter-spacing : ${props=> props.theme.typography.h6.letterSpacing};
}
p{
    font-weight : ${props=> props.theme.typography.p.fontWeight};
    font-size : ${props=> props.theme.typography.p.fontSize};
    line-height : ${props=> props.theme.typography.p.lineHeight};
    letter-spacing : ${props=> props.theme.typography.p.letterSpacing};
    color : ${props=> props.theme.colors.grey}
}
.btn{
  background-color: ${props=> props.theme.colors.main};
  border: ${props=> props.theme.buttons.border};
  padding: ${props=> props.theme.buttons.padding};
  border-radius: ${props=> props.theme.buttons.borderRadius};
  color: ${props=> props.theme.colors.white};
  font-family: "${props=> props.theme.buttons.fontFamily}";
  font-size: ${props=> props.theme.buttons.fontSize};
  transition: 0.3s;
}
button.btn:hover{
  background-color: ${props=> props.theme.colors.dark};
  cursor: pointer;
  transform: scale(1.2)
}
.box{
    padding: ${props=> props.theme.box.padding};
    background-color: ${props=> props.theme.colors.white};
    border-radius: ${props=> props.theme.box.borderRadius};
    box-shadow: ${props=> props.theme.shadows.boxShadow};
}
.container{
    width: 1200px;
    margin: auto;
}
.title{
    text-align: center;
    padding-top: 100px;
    padding-bottom: 10px;
}
.title>h2{
  border-bottom: 2px solid  ${props=> props.theme.colors.main};
  display: inline-block;
  padding: 0 1.5rem;
}
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0); }
      40% {
        transform: translateY(-10px); }
      60% {
        transform: translateY(-5px); } 
  }
  details[open] summary ~ * {
    animation: growText .5s ease-in-out;
  }
  details[closed] summary ~ * {
    animation: shrinkText .5s ease-in-out;
  }
  
  @keyframes growText {
    0%    { font-size: 0rem}
    100%  {font-size: 1rem}
  }
  .vertical-timeline::before{
      background: ${props=> props.theme.colors.main}
  }
  .timelineIcon{
    background: ${props=> props.theme.colors.main}
  }
  .timelineShadow>div{
      box-shadow: ${props=> props.theme.shadows.boxShadow};
      border-radius: 16px !important;
  }
  .timelineElementName {
    font-weight : ${props=> props.theme.typography.h6.fontWeight} !important;
    font-size : ${props=> props.theme.typography.h6.fontSize} !important;
    line-height : ${props=> props.theme.typography.h6.lineHeight} !important;
    letter-spacing : ${props=> props.theme.typography.h6.letterSpacing} !important;
  }
  @keyframes scrollBackground {
    0%    { background-position: 0 0%}
    100%  {background-position: 0 100%}
  }
  a:link {
    color: ${props=> props.theme.colors.main};
  }
  
  /* visited link */
  a:visited {
    color: ${props=> props.theme.colors.main};
  }
  
  /* mouse over link */
  a:hover {
    color: ${props=> props.theme.colors.main};
  }
  
  /* selected ${props=> props.theme.colors.main} */
  a:active {
    color: yellow;
  }

  @media(max-width: ${props=> props.theme.breakpoints.l}){
    .container{
      width: 900px;
    }
  }
  @media(max-width:${props=> props.theme.breakpoints.m}){
    .container{
      width: 600px;
    }
  }
  @media(max-width:${props=> props.theme.breakpoints.s}){
    html{
      font-size: 12px
    }
    .container{
      width: 90%;
      margin: 0 5%;
    }
  }
`

export default GlobalStyles;
