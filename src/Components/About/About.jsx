import React from 'react'
import { Box, List, Item, Number, Title, Text, Image, } from "./About.styled"




const About = ({about}) => {
  return (
    <Box>
        <List>
        {about.map(({ number, title, text, image }) => (
    <Item>
        <Number>{number}</Number>    
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Image src={image} alt="image" ></Image>
    </Item>  
    ))}
        </List>
    </Box>
  )
}


export {About}


