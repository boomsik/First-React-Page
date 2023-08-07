import styled from "@emotion/styled";


export const Box = styled.div`
padding-bottom: 50px;

`;

export const List = styled.ul`
display: flex;
justify-content: space-between;

`;




export const Item = styled.li`
width: 290px;

&:nth-child(2) {
  margin-top:100px;
  }
`;



export const Number = styled.p`
color: rgba(1, 153, 109, 0.20);
text-align: center;
font-family: Georgia;
font-size: 150px;
font-style: normal;
font-weight: 400;
line-height: 150%;
`;

export const Title = styled.h3`
color: #000;
text-align: center;
font-family: Georgia;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: 150%;
`;

export const Text = styled.p`
color: #424242;
font-family: Lato;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 150%;
`;

export const Image = styled.img`
width: 290px;
height: 392px;
`;

