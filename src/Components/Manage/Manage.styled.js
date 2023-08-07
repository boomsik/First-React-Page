import styled from '@emotion/styled'
import bg from './bg-ser.jpg'



export const Box = styled.div`
margin-top: 10px;
background: url(${bg});
background-repeat: no-repeat;
max-width: 1000px;
height: 600px;
`;


export const Block = styled.div`
width: 300px;
padding-top: 100px;
padding-left: 100px;

`;

export const Title = styled.h1`
color: #01996D;
font-size: 35px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const Paragraph = styled.p`
color: #484848;
font-size: 15px;
font-style: normal;
font-weight: 400;
`;

export const Button = styled.button`
margin-top: 30px;
padding: 12px 50px;
border-radius: 4px;
border: 1px solid #01996D;
background: #01996D;
color: #FFF;
`;