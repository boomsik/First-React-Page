import React from 'react'
import { Box, Title, Image, Name, Pretitle, List, Item, ItemText } from "./Face.styled"



const Face = ({ title, image, name, descr, textOne, textTwo }) => {
  return (
    <Box>
          <Title>{title}</Title>
          <Image src={image} ></Image>
          <Name>{name}</Name>
          <Pretitle>{descr}</Pretitle>
          <List>
              <Item>
                  <ItemText>{textOne}</ItemText>
              </Item>
              <Item>
                  <ItemText>{textTwo}</ItemText>
               </Item>
          </List>
    </Box>
  )
}


export {Face}