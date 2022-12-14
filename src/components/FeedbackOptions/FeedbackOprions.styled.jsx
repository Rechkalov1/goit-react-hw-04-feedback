import styled from 'styled-components';

export const FeedbackButton = styled.div`
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
   display: inline-flex;
    margin: 10px;
    text-decoration: none;
    position: relative;
    font-size: 20px;
    line-height: 20px;
    padding: 12px 30px;
    color: #FFF;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Roboto Condensed', Тahoma, sans-serif;
    background: #337AB7;
    cursor: pointer;
    border: 2px solid #BFE2FF;
    overflow: hidden;
    z-index: 1;
    border-radius: 10px;

&:hover,
&:active,
&:focus {
    color: #FFF;
}
&:before {
    content: '';
    position: absolute;
    top: 0;
    right: -50px;
    bottom: 0;
    left: 0;
    border-right: 50px solid transparent;
    border-top: 50px solid #2D6B9F;
    transition: transform 0.5s;
    transform: translateX(-100%);
    z-index: -1;
}
&:hover:before,
&:active:before,
&:focus:before {
    transform: translateX(0);

}

 
`
